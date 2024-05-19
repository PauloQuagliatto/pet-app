import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "./routers/auth";
import { firestoreRouter } from "./routers/firestore";
import { storageRouter } from "./routers/storage";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  firestore: firestoreRouter,
  storage: storageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
