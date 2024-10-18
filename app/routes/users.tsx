import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { fetchUsers } from '~/utils/users';

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
    <div className='p-2 flex gap-2'>
      <ul className='list-disc pl-4'>
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
  );
}
