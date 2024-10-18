import { ErrorComponent, Link, createFileRoute } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { NotFound } from '~/components/NotFound';
import { fetchProject } from '~/utils/projects-service';

/**
 * Dynamic project route component.
 * This component handles individual project pages with dynamic IDs.
 *
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#dynamic-route-segments TanStack Router - Dynamic Route Segments}
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/path-params TanStack Router - Path Params}
 */
export const Route = createFileRoute('/projects/$projectId')({
  loader: async ({ params: { projectId } }) => fetchProject(projectId),
  errorComponent: ProjectErrorComponent as any,
  component: ProjectComponent,
  notFoundComponent: () => {
    return <NotFound>Project not found</NotFound>;
  },
});

export function ProjectErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function ProjectComponent() {
  const project = Route.useLoaderData();

  return (
    <div className='space-y-2'>
      <h4 className='text-xl font-bold underline'>{project?.name}</h4>
      <div className='text-sm'>{project?.ownerId}</div>
    </div>
  );
}
