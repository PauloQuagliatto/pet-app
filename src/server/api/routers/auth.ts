import { z } from "zod";
import { hash } from "bcrypt";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { randomUUID } from "crypto";
import { users } from "@/server/db/tables";

export const authRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const id = randomUUID();
      const passwordHash = await hash(input.password, 4);
      try {
        await ctx.db.insert(users).values({
          id,
          password: passwordHash,
          email: input.email,
          name: input.name,
        })
        return {
          id,
          email: input.email,
          name: input.name,
        };
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
});
