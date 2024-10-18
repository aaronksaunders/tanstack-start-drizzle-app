import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Define the allowed values for the enum column
const PROJECT_STATUS = ['not_started', 'completed', 'archived', 'in_progress'] as const;

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email'),
});

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  status: text('status', { enum: PROJECT_STATUS }).default('not_started').notNull(),
  ownerId: integer('owner_id')
    .notNull()
    .references(() => users.id),
});

// Add type definitions
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type ProjectStatus = (typeof PROJECT_STATUS)[number];
