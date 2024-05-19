import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { storage } from "@/services/firebase";

export const storageRouter = createTRPCRouter({
});
