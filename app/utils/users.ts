import { createServerFn } from "@tanstack/start";
import db from "drizzle/db";
import { users } from "drizzle/schema";
import { eq } from "drizzle-orm"; // Add this import

export const fetchUsers = createServerFn("GET", async () => {
  console.info("Fetching users...");

  // test drizzle-orm
  try {
    const allUsers = db.select().from(users).all();
    console.log("[users] ==>", allUsers);
    return allUsers;
  } catch (error) {
    console.error("error ==>", error);
  }
});

export const fetchUser = createServerFn("GET", async (userId: string) => {
  console.info(`Fetching user with id ${userId}...`);

  // use drizzle-orm
  const user = db
    .select()
    .from(users)
    .where(eq(users.id, parseInt(userId, 10)))
    .get();

  return user;
});
