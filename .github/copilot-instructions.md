# Copilot Instructions

## Overview

We are building a **Discord bot platform** with the following components:

* **Discord.js v14** for bot commands, events, and interactions.
* **Express.js** for a backend REST API to support a web dashboard.
* **Next.js (React)** frontend (in `/web`) for moderators to configure the bot.
* **PostgreSQL** as the main database (accessed via **Prisma ORM**).
* **Chroma** as the vector database for RAG (embeddings + retrieval).
* **Node-cron** (or similar) for scheduled tasks.

This project is a **monorepo** with this layout:

```
/bot        -> Discord bot code
/api        -> Express backend API
/web        -> Next.js frontend for configuration dashboard
/prisma     -> Prisma schema and migrations
/shared     -> Shared types, utils
```

## Database Access

* All database queries go through **Prisma ORM**.
* Use PostgreSQL as the backing database.
* Never write raw SQL unless explicitly required.
* Define models in `/prisma/schema.prisma` and run migrations with `prisma migrate`.

## Bot Development

* Use **Discord.js v14** for all commands, events, and interactions.
* Organize **slash commands** in separate files with a command handler.
* Organize **event listeners** in separate files with an event handler.
* Use **async/await**, never `.then()` chains.
* Use TypeScript with ESM imports.

## API Development

* Use **Express.js** for backend routes in `/api`.
* All routes should:

  * Be modular (one file per route group).
  * Use async/await.
  * Return JSON responses.
* Business logic should live in a **services layer**, separate from route definitions.

## Web Frontend

* Use **Next.js** in `/web`.
* Use React with TypeScript.
* Use Tailwind CSS and Shadcn/UI for components.
* Authentication: Discord OAuth2 login.
* Only server admins/moderators can access configuration features.

## Vector Database (Chroma)

* Use Chroma client for vector database interactions.
* Store embeddings for RAG queries.
* Organize embeddings by guild (namespace per guild).
* Retrieval process:

  1. Embed text with OpenAI.
  2. Store in Chroma.
  3. Retrieve relevant context for chatbot responses.

## Coding Conventions

* Use **TypeScript** for all code.
* Shared types/interfaces go in `/shared`.
* Prefer small, composable modules.
* Environment configuration via `.env` files.
* Follow clear separation of concerns:

  * Bot logic in `/bot`
  * API routes in `/api`
  * Frontend in `/web`
  * Database schema in `/prisma`
* Always assume TypeScript and Prisma when generating code.

## Deployment

* Use **Docker** for containerization.
* Each service runs in its own container (`bot`, `api`, `web`, `db`, `chroma`).
* Configure secrets and environment variables through `.env`.
* Code should be production-ready and scalable.

## Infrastructure

* **Scalability**: Designed to support multiple guilds.

---

## Notes for Copilot

* Always generate **TypeScript** code.
* Always use **Prisma** for database queries.
* Always use **Discord.js v14** for bot commands/events.
* Always generate **Express.js routes** for API endpoints.
* Always use **Chroma client** for vector DB interactions.
* Prefer **Next.js pages + API routes** for web frontend.
* Do not assume legacy patterns — this project is a fresh rewrite.
