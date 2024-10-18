import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndexComponent,
});

function ProjectsIndexComponent() {
  return <div>Select a project.</div>;
}
