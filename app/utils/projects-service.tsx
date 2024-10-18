import { createServerFn } from '@tanstack/start';
import db from 'drizzle/db';
import { NewProject, projects } from 'drizzle/schema';
import { eq } from 'drizzle-orm';

/**
 * Fetches a single project by its ID.
 * @param projectId - The ID of the project to fetch.
 * @returns A Promise that resolves to the project data.
 */
export const fetchProject = createServerFn('GET', async (projectId: string) => {
  console.info(`Fetching project with id ${projectId}...`);

  try {
    const project = db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(projectId, 10)))
      .get();

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
export const fetchProjects = createServerFn('GET', async () => {
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
export const createProject = createServerFn('POST', async (projectData: NewProject) => {
  console.info('Creating new project...');

  try {
    const [newProject] = await db.insert(projects).values(projectData).returning();
    console.log('[new project] ==>', newProject);
    return newProject;
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Failed to create project');
  }
});
