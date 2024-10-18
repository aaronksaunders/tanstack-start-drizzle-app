import { json } from '@tanstack/start';
import { createAPIFileRoute } from '@tanstack/start/api';
import { eq } from 'drizzle-orm';
import db from 'drizzle/db';
import { users } from 'drizzle/schema';

export const Route = createAPIFileRoute('/api/users/$id')({
  GET: async ({ request, params }) => {
    console.info(`Fetching users by id=${params.id}... @`, request.url);
    try {
      // use drizzle-orm
      const user = db
        .select()
        .from(users)
        .where(eq(users.id, parseInt(params.id, 10)))
        .get();
      console.log('[user] ==>', user);
      if (!user) {
        throw new Error('User not found');
      }
      return json(user);
    } catch (e) {
      console.error(e);
      return json({ error: 'User not found' }, { status: 404 });
    }
  },
});
