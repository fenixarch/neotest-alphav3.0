const express = require('express');
const { auth } = require('../middleware/auth');
const Chat = require('../models/Chat');
const { validateMessage } = require('../validators/chat');

const router = express.Router();

// Get user's chats
router.get('/', auth, async (req, res) => {
  try {
    const chats = await Chat.find({ participants: req.user.id })
      .populate('participants', 'username avatar status')
      .populate('lastMessage')
      .sort('-updatedAt');

    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single chat
router.get('/:chatId', auth, async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.chatId,
      participants: req.user.id,
    })
      .populate('participants', 'username avatar status')
      .populate('messages.sender', 'username avatar');

    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new chat
router.post('/', auth, async (req, res) => {
  try {
    const { participantId } = req.body;

    const existingChat = await Chat.findOne({
      participants: { $all: [req.user.id, participantId] },
    });

    if (existingChat) {
      return res.json(existingChat);
    }

    const chat = new Chat({
      participants: [req.user.id, participantId],
    });

    await chat.save();
    await chat.populate('participants', 'username avatar status');

    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Send message
router.post('/:chatId/messages', auth, async (req, res) => {
  try {
    const validation = validateMessage(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.message });
    }

    const { content, attachments } = req.body;
    const chat = await Chat.findOne({
      _id: req.params.chatId,
      participants: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    const message = {
      sender: req.user.id,
      content,
      attachments: attachments || [],
    };

    chat.messages.push(message);
    chat.lastMessage = message;
    await chat.save();

    // Trigger Pusher event
    req.app.get('pusher').trigger(`chat-${chat._id}`, 'new-message', {
      message: {
        ...message,
        sender: {
          id: req.user.id,
          username: req.user.username,
          avatar: req.user.avatar,
        },
      },
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;