/**
 * Initializes a SQLite database connection using the `drizzle-orm` library.
 * The database file is named `sqlite.db` and is located in the `app/db` directory.
 * The `db` object can be used to interact with the SQLite database throughout the application.
 */
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { projects } from "./schema";

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);

console.log("projects ==>", projects);

console.log("db ==>", db);

// test query
const allProjects = db.select().from(projects).all();
console.log("projects ==>", allProjects);

export default db;
