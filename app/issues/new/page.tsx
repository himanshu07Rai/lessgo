'use client';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

enum Priority {
  Low,
  Medium,
  High,
}

type IssueForm = {
  title: string;
  description: string;
  priority: number;
};

const page = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<IssueForm>();
  const handleNewIssue = async (data: IssueForm) => {
    try {
      data.priority = parseInt(Priority[data.priority], 10);
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Create Issue</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleNewIssue)}>
        <input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Title"
          {...register('title')}
        />
        <select className="border border-gray-300 rounded-md p-2" {...register('priority')}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              className="border border-gray-300 rounded-md p-2"
              placeholder="Description"
              {...field}
            />
          )}
        />
        <button className="bg-blue-500 text-white rounded-md p-2">Create Issue</button>
      </form>
    </div>
  );
};

export default page;
