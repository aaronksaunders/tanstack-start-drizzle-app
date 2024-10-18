import { ErrorComponent, createFileRoute } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { NotFound } from '~/components/NotFound';
import { fetchUser } from '~/utils/users-service';

/**
 * Route configuration for individual user pages.
 * This route handles the '/users/:userId' path.
 *
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#dynamic-route-segments TanStack Router - Dynamic Route Segments}
 */
export const Route = createFileRoute('/users/$userId')({
  loader: async ({ params: { userId } }) => {
    return await fetchUser(userId);
  },
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => <NotFound>User not found</NotFound>,
});

/**
 * Error component for the user route.
 * Renders when an error occurs during route loading or rendering.
 */
export function UserErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

/**
 * Main component for rendering individual user details.
 * Uses the data fetched by the loader.
 */
function UserComponent() {
  const user = Route.useLoaderData();

  return (
    <div className='space-y-2'>
      <h4 className='text-xl font-bold underline'>{user?.fullName}</h4>
      {/* Add more user details here */}
    </div>
  );
}
