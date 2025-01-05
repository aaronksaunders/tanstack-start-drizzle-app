import { createServerFn } from '@tanstack/start';
import db from 'drizzle/db';
import { NewProject, projects } from 'drizzle/schema';
import { eq } from 'drizzle-orm';

/**
 * Fetches a single project by its ID.
 * @param projectId - The ID of the project to fetch.
 * @returns A Promise that resolves to the project data.
 */
export const fetchProject = createServerFn({ method: 'GET' })
  .validator((projectId: number) => {
    if (typeof projectId !== 'number') {
      throw new Error('Invalid project ID');
    }
    return projectId;
  })
  .handler(async ({ data }: { data: number }) => {
    console.info(`Fetching project with id ${data}...`);

    try {
      const project = db.select().from(projects).where(eq(projects.id, data)).get();

      if (!project) {
        throw new Error('Project not found');
      }

      return project;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw new Error('Failed to fetch project');
    }
  });

/**
 * Fetches all projects.
 * @returns A Promise that resolves to an array of project data.
 */
export const fetchProjects = createServerFn({ method: 'GET' }).handler(async () => {
  console.info('Fetching projects...');

  try {
    const allProjects = db.select().from(projects).all();
    console.log('[projects] ==>', allProjects);
    return allProjects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
});

/**
 * Creates a new project.
 * @param projectData - The data for the new project.
 * @returns A Promise that resolves to the created project data.
 */
export const createProject = createServerFn({ method: 'POST' })
  .validator((input: NewProject) => {
    if (!input) {
      throw new Error('Project data is required');
    }
    return input;
  })
  .handler(async ({ data }: { data: NewProject }) => {
    console.info('Creating project...', data);
    try {
      const result = db.insert(projects).values(data).run();
      return result;
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    }
  });
