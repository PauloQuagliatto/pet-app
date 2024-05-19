import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { auth } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const firestoreRouter = createTRPCRouter({
  createUser: publicProcedure
    .mutation(async () => {
      try {
        await createUserWithEmailAndPassword(auth, "pquagliatto.dev@hotmail.com", "123Teste");
      } catch (e) {
        console.log(e)
      }
    })
});
