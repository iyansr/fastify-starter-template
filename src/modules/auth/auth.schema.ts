import { z } from 'zod';

export const loginBodySchema = {
  tags: ['auth'],
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
} as const;

export type LoginBody = z.infer<typeof loginBodySchema.body>;
