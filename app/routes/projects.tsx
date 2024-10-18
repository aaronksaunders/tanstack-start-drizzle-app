import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { fetchProjects } from '~/utils/projects-service';

/**
 * Projects route component.
 * This component handles the /projects route and its children.
 * It fetches and displays a list of projects and renders child routes.
 *
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#static-routes TanStack Router - Static Routes}
 * @see {@link https://tanstack.com/router/latest/docs/framework/react/guide/data-loading TanStack Router - Data Loading}
 */
export const Route = createFileRoute('/projects')({
  loader: async () => fetchProjects(),
  component: ProjectsComponent,
});

function ProjectsComponent() {
  const projects = Route.useLoaderData();

  return (
    <div className='p-2 flex gap-2'>
      <ul className='list-disc pl-4'>
        {projects?.map((project) => {
          return (
            <li key={project.id} className='whitespace-nowrap'>
              <Link
                to={`/projects/$projectId`}
                params={{ projectId: project.id.toString() }}
                className='block py-1 text-blue-800 hover:text-blue-600'
                activeProps={{ className: 'text-black font-bold' }}>
                <div>{project.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
