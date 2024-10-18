import { createServerFn } from '@tanstack/start';
import db from 'drizzle/db';
import { users } from 'drizzle/schema';
import { eq } from 'drizzle-orm'; // Add this import

/**
 * Fetches all users from the database.
 * @returns A Promise that resolves to an array of user data.
 * @throws {Error} If there's a database error.
 */
export const fetchUsers = createServerFn('GET', async () => {
  console.info('Fetching users...');

  try {
    const allUsers = db.select().from(users).all();
    console.log('[users] ==>', allUsers);
    return allUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
});

/**
 * Fetches a single user by their ID.
 * @param userId - The ID of the user to fetch.
 * @returns A Promise that resolves to the user data.
 * @throws {Error} If the user is not found or there's a database error.
 */
export const fetchUser = createServerFn('GET', async (userId: string) => {
  console.info(`Fetching user with id ${userId}...`);

  try {
    const user = db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(userId, 10)))
      .get();

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
});
