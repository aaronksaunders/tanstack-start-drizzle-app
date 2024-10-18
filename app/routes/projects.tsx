import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchProjects } from "~/utils/projects-service";

export const Route = createFileRoute("/projects")({
  loader: async () => fetchProjects(),
  component: ProjectsComponent,
});

function ProjectsComponent() {
  const projects = Route.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {projects?.map((project) => {
          return (
            <li key={project.id} className="whitespace-nowrap">
              <Link
                to={`/projects/$projectId`}
                params={{ projectId: project.id.toString() }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: "text-black font-bold" }}
              >
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
