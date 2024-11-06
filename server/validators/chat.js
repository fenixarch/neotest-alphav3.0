const { z } = require('zod');

const messageSchema = z.object({
  content: z.string().min(1),
  attachments: z.array(z.object({
    type: z.string(),
    url: z.string().url(),
    fileType: z.string(),
  })).optional(),
});

module.exports = {
  validateMessage: (data) => messageSchema.safeParse(data),
};