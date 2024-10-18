# TanStack Start Example

This project is a web application built with TanStack Start and Drizzle ORM. It demonstrates a
full-stack React application with routing, server-side rendering, and database integration.

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
  - `/components`: Reusable React components
  - `/routes`: Route components and API handlers
  - `/styles`: CSS styles, including Tailwind configuration
  - `/utils`: Utility functions and services
- `/drizzle`: Database schema and migrations
- `/public`: Static assets

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

This project uses Vite for fast development and building. The development server will rebuild assets
on file changes.

## Database

The project uses SQLite with Drizzle ORM. The database schema is defined in `drizzle/schema.ts`. You
can use Drizzle Studio to manage your database by running `npm run studio`.

## Routing

Routing is handled by TanStack Router. Route components are located in the `/app/routes` directory.

## Styling

Tailwind CSS is used for styling. The main CSS file is located at `/app/styles/app.css`.

## API Routes

API routes are defined in the `/app/routes/api` directory. These routes handle server-side logic and
database operations.

## Deployment and Production

This project uses Vinxi, a powerful meta-framework for building full-stack JavaScript applications.
To deploy the application:

1. Build the project:

   ```
   npm run build
   ```

   This command uses Vinxi to build the application with the `node-server` preset, optimizing it for
   server-side rendering with a Node.js backend.

2. Start the production server:
   ```
   npm run start
   ```
   This command starts the Vinxi server in production mode, serving your built application.

### Node.js Server

The built project runs on a Node.js server, which handles both serving the static assets and
server-side rendering (SSR) of your React application. This setup provides several benefits:

- Improved initial page load times due to server-side rendering
- Better SEO as search engines can crawl the fully rendered content
- Seamless handling of both client-side and server-side routing

### Environment Variables

When running the production server, make sure to set any necessary environment variables. You can do
this by creating a `.env` file in the root of your project or by setting them directly in your
deployment environment.

### Hosting Recommendations

This Vinxi-powered application can be deployed to various Node.js-compatible hosting platforms, such
as:

- Vercel
- Netlify
- DigitalOcean App Platform
- Heroku
- AWS Elastic Beanstalk

Ensure that your chosen hosting platform supports Node.js and can run the `npm run start` command to
start the server.

### Performance Considerations

- The production build is optimized for performance, but you may want to implement additional
  caching strategies or a CDN for static assets in a high-traffic production environment.
- Monitor your application's performance and resource usage in production, and scale your server
  resources as needed.

For more detailed information on deploying Vinxi applications, refer to the
[Vinxi documentation](https://vinxi.vercel.app/guide/deployment).
