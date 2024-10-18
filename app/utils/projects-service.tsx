import { createServerFn } from "@tanstack/start";
import db from "drizzle/db";
import { projects } from "drizzle/schema";
import { eq } from "drizzle-orm";

export const fetchProject = createServerFn("GET", async (projectId: string) => {
  console.info(`Fetching project with id ${projectId}...`);

  // use drizzle-orm
  const project = db
    .select()
    .from(projects)
    .where(eq(projects.id, parseInt(projectId, 10)))
    .get();

  return project;
});

export const fetchProjects = createServerFn("GET", async () => {
  console.info("Fetching projects...");

  // test drizzle-orm
  try {
    const allProjects = db.select().from(projects).all();
    console.log("[projects] ==>", allProjects);
    return allProjects;
  } catch (error) {
    console.error("error ==>", error);
  }
});
