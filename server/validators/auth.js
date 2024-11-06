const { z } = require('zod');

const registrationSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

module.exports = {
  validateRegistration: (data) => registrationSchema.safeParse(data),
  validateLogin: (data) => loginSchema.safeParse(data),
};