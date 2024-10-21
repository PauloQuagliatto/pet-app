# Pet App

A social network to take care of your pet and share daily activities.

### Development Roadmap

- [x] Create database tables
- [x] Create login and signup interfaces
- [x] Implement next-auth authentication to the app
- [x] Create protected routes
- [x] Create pets list
- [x] Create new pet page
- [x] Create edit pet page
- [x] Create insert to and read from database server actions
- [ ] Create a feed
- [ ] Create a tinder like mating page
- [ ] Create an adoption page
- [ ] Create a vaccine calendar page
- [ ] Create lost and found pets page
- [ ] Integrate payment system


### About the app

It is made using NextJS, Tailwindcss, ShadcnUI, Drizzle ORM, React Hook Form, Zod and Stripe.
We use the Turso sqlite database.
Development is done using Docker and Deployment using Vercel.

### Run the project

#### Setup
First setup the docker container using docker compose

```bash
docker compose up --build -d
```

Then access the container

```bash
docker exec -it pet-app bash
```

Set the environment variables:
__NEXTAUTH_SECRET__ and __TURSO_DATABASE_URL__

Create a local sqlite database, it can be run with turson using

```bash
turso dev --db-file dev.db
```

or you can set the env variable to point directly to the file

Install the dependencies running

```bash
pnpm install
```

Now you should push the drizzle configuration and tables to the database running:

```bash
pnpm run db:push
```

#### Start dev server

Inside the container run

```bash
pnpm run dev
```
