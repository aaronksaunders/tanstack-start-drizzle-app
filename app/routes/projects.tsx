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
    <div className=' flex p-2 flex-col gap-2 '>
      <div className='flex flex-col gap-2'>
        <div className='mt-4'>
          <Link
            to='/projects/new'
            className=' text-sm inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            New Project
          </Link>
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <ul className='list-disc px-4 border-r-2 border-gray-200'>
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
    </div>
  );
}
