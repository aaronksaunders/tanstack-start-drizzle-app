import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { createUser } from '~/utils/users';

export const Route = createFileRoute('/users/new')({
  component: NewUserComponent,
});

function NewUserComponent() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser({ fullName, email });
      navigate({ to: '/users' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className='w-1/2 mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Create New User</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-transparent focus:outline-none'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-transparent focus:outline-none'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
