# Pet App

A social network to take care of your pet and share daily activities.

### Development Roadmap

##### TODO
- [ ] Create a vaccine calendar page
- [ ] Create a feed
- [ ] Create a tinder like mating page
- [ ] Create an adoption page
- [ ] Create lost and found pets page
- [ ] Integrate payment system

##### DONE
- [x] Create database tables
- [x] Create login and signup interfaces
- [x] Implement authentication flow
- [x] Create protected routes
- [x] Create pets list
- [x] Create new pet page
- [x] Create edit pet page
- [x] Create insert to and read from database server actions


### About the app
It is made using Nuxt 3 and Bun. The app uses Nuxt pages, route middleware and composables for its client experience.
We use the Turso sqlite database.
Development is done using Docker and can be deployed to any Nuxt-compatible Node or Bun runtime.

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

Set the environment variables from `.env.example` when connecting the app to external services.

Create a local sqlite database, it can be run with turson using

```bash
turso dev --db-file dev.db
```

or you can set the env variable to point directly to the file

Install dependencies with Bun:

```bash
bun install
```

#### Start dev server

Inside the container run

```bash
bun run dev
```
