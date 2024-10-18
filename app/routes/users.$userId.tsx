import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import axios from "redaxios";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "~/components/NotFound";
import { fetchUser } from "~/utils/users";

export const Route = createFileRoute("/users/$userId")({
  loader: async ({ params: { userId } }) => {
    return await fetchUser(userId);
  },
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => {
    return <NotFound>User not found</NotFound>;
  },
});

export function UserErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function UserComponent() {
  const user = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{user?.fullName}</h4>
    </div>
  );
}
