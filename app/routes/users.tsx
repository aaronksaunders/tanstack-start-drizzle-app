import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchUsers } from "~/utils/users";

export const Route = createFileRoute("/users")({
  loader: async () => {
    return await fetchUsers();
  },
  component: UsersComponent,
});

function UsersComponent() {
  const users = Route.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {users?.map((user) => {
          return (
            <li key={user.id} className="whitespace-nowrap">
              <Link
                to="/users/$userId"
                params={{
                  userId: String(user.id),
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: "text-black font-bold" }}
              >
                <div>{user.fullName}</div>
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
