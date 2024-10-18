import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { createProject } from '~/utils/projects-service';
import { fetchUsers } from '~/utils/users-service';
import { ProjectStatus, User } from 'drizzle/schema';

export const Route = createFileRoute('/projects/new')({
  component: NewProjectComponent,
});

function NewProjectComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('not_started');
  const [ownerId, setOwnerId] = useState('');
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    async function loadUsers() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }
    loadUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject({ name, description, status, ownerId: parseInt(ownerId, 10) });
      navigate({ to: '/projects' });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className='w-1/2 mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Create New Project</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm  focus:ring-transparent focus:outline-none'
              required
            />
          </div>
          <div>
            <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm  focus:ring-transparent focus:outline-none'
              rows={3}></textarea>
          </div>
          <div>
            <label htmlFor='status' className='block text-sm font-medium text-gray-700'>
              Status
            </label>
            <select
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value as ProjectStatus)}
              className='mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm  focus:ring-transparent focus:outline-none'>
              <option value='not_started'>Not Started</option>
              <option value='in_progress'>In Progress</option>
              <option value='completed'>Completed</option>
              <option value='archived'>Archived</option>
            </select>
          </div>
          <div>
            <label htmlFor='ownerId' className='block text-sm font-medium text-gray-700'>
              Project Owner
            </label>
            <select
              id='ownerId'
              value={ownerId}
              onChange={(e) => setOwnerId(e.target.value)}
              className='mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm  focus:ring-transparent focus:outline-none'
              required>
              <option value=''>Select an owner</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.fullName}
                </option>
              ))}
            </select>
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}
