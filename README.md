# TanStack Start Example

This project is a web application built with TanStack Start and Drizzle ORM. It demonstrates a full-stack React application with routing, server-side rendering, and database integration.

## Features

- React-based frontend with TanStack Router for routing
- Server-side rendering (SSR) support
- SQLite database integration using Drizzle ORM
- API routes for backend functionality
- Tailwind CSS for styling

## Technologies Used

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Drizzle ORM](https://orm.drizzle.team/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [SQLite](https://www.sqlite.org/)

## Project Structure

- `/app`: Contains the main application code
- `/drizzle`: Contains database schema and migrations
- `/public`: Static assets
- `/app/routes`: Route components and API handlers
- `/app/components`: Reusable React components
- `/app/utils`: Utility functions and services

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up the database:
   ```
   npm run generate
   npm run push
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production-ready application
- `npm run start`: Start the production server
- `npm run generate`: Generate Drizzle ORM schema
- `npm run push`: Push schema changes to the database
- `npm run studio`: Open Drizzle Studio for database management
- `npm run format`: Format code using Prettier

## Development

This project uses Vite for fast development and building. The development server will rebuild assets on file changes.

## Database

The project uses SQLite with Drizzle ORM. The database schema is defined in `drizzle/schema.ts`. You can use Drizzle Studio to manage your database by running `npm run studio`.

## Routing

Routing is handled by TanStack Router. Route components are located in the `/app/routes` directory.

## Styling

Tailwind CSS is used for styling. The main CSS file is located at `/app/styles/app.css`.

## API Routes

API routes are defined in the `/app/routes/api` directory. These routes handle server-side logic and database operations.

## Deployment

To deploy the application, build it using `npm run build` and then start the production server with `npm run start`.

For more information on TanStack Router, visit the [official documentation](https://tanstack.com/router).
