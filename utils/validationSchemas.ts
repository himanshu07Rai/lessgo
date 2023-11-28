import { PriorityType } from '@/types';
import { z } from 'zod';

export const createIssueSchema = z.object({
  title: z
    .string()
    .min(1, 'Title must be at least 1 character long')
    .max(255, 'Title must be at most 50 characters long'),
  description: z.string().min(1, 'Description must be at least 1 character long'),
  priority: z.nativeEnum(PriorityType),
});
