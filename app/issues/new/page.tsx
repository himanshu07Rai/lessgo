'use client';
import React from 'react';
import 'easymde/dist/easymde.min.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { PriorityType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>;

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const handleNewIssue = async (data: IssueForm) => {
    try {
      setIsSubmitting(true);
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  return (
    <div className="max-w-xl pl-10">
      <h1 className="text-3xl font-bold">Create Issue</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleNewIssue)}>
        <input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Title"
          {...register('title')}
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <label>Priority</label>
        <select className="border border-gray-300 rounded-md p-2" {...register('priority')}>
          <option>{PriorityType.LOW}</option>
          <option>{PriorityType.MEDIUM}</option>
          <option>{PriorityType.HIGH}</option>
        </select>
        {errors.priority && <ErrorMessage>{errors.priority.message}</ErrorMessage>}
        <textarea
          className="border border-gray-300 rounded-md p-2"
          placeholder="Description"
          {...register('description')}
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <button className="bg-blue-500 text-white rounded-md p-2">Create Issue</button>
        {isSubmitting && <Spinner />}
      </form>
    </div>
  );
};

export default page;
