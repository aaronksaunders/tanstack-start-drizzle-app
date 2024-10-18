import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { fetchUsers } from '~/utils/users-service';

/**
 * Route configuration for the users list page.
 * This route handles the '/users' path and acts as a parent for individual user routes.
 *
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#static-routes TanStack Router - Static Routes}
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/data-loading TanStack Router - Data Loading}
 */
export const Route = createFileRoute('/users')({
  loader: async () => {
    return await fetchUsers();
  },
  component: UsersComponent,
});

/**
 * Main component for rendering the list of users and handling nested routes.
 * Uses the data fetched by the loader to display a list of users.
 */
function UsersComponent() {
  const users = Route.useLoaderData();

  return (
    <div className='flex p-2 flex-col gap-2'>
      <div className='flex flex-col gap-2'>
        <div className='mt-4'>
          <Link
            to='/users/new'
            className='text-sm inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            New User
          </Link>
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <ul className='list-disc px-4 border-r-2 border-gray-200'>
          {users?.map((user) => (
            <li key={user.id} className='whitespace-nowrap'>
              <Link
                to='/users/$userId'
                params={{
                  userId: String(user.id),
                }}
                className='block py-1 text-blue-800 hover:text-blue-600'
                activeProps={{ className: 'text-black font-bold' }}>
                <div>{user.fullName}</div>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
