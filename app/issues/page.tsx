export const dynamic = 'force-dynamic';
import Link from 'next/link';
import React from 'react';

async function getIssues() {
  console.log('getIssues');

  const issues = await fetch('http://localhost:3000/api/issues', {
    next: {
      revalidate: 0,
    },
  });
  return issues.json();
}

const Issues = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const issues: Array<{
    id: number;
    title: string;
    description: string;
    priority: string;
  }> = await getIssues();

  return (
    <div className="flex flex-col">
      Issues
      <>
        {issues.map((issue) => (
          <div key={issue.id} className="flex gap-4 p-5 bg-slate-400 border-b-2 border-red-800">
            <div>{issue.title}</div>
            <div>{issue.description}</div>
            <div>{issue.priority}</div>
          </div>
        ))}
      </>
      <Link href="/issues/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded py-2 my-2">
          Create
        </button>
      </Link>
    </div>
  );
};

export default Issues;
