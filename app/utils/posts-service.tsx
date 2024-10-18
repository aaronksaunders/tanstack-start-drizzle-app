import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import db from "drizzle/db";
import { projects } from "drizzle/schema";
import axios from "redaxios";

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export const fetchPost = createServerFn("GET", async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`);

  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)
    .catch((err) => {
      console.error(err);
      if (err.status === 404) {
        throw notFound();
      }
      throw err;
    });

  return post;
});

export const fetchPosts = createServerFn("GET", async () => {
  console.info("Fetching posts...");

  // test drizzle-orm
  try {
    const allProjects = db.select().from(projects).all();
    console.log("[projects] ==>", allProjects);
  } catch (error) {
    console.error("error ==>", error);
  }

  return axios
    .get<Array<PostType>>("https://jsonplaceholder.typicode.com/posts")
    .then((r) => r.data.slice(0, 10));
});
