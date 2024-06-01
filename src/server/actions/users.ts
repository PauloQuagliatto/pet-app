"use server";

import { hash } from "bcrypt";
import { randomUUID } from "crypto";

import { auth } from "@/server/auth";
import { users } from "@/server/db/tables";
import { db } from "@/server/db";

import { CreateUserSchema, createUserSchema } from "@/schemas/createUserSchema";

export async function createUser(input: Omit<CreateUserSchema, "confirmPassword">) {
  const { success, data } = createUserSchema.omit({
    confirmPassword: true 
  }).safeParse(input);

  if(!success) {
    throw Error("Data not matching type");
  }

  const id = randomUUID();
  const passwordHash = await hash(data.password, 4);
  try {
    await db.insert(users).values({
      id,
      password: passwordHash,
      ...data
    });
    return;
  } catch (error) {
    console.log(error);
    throw Error("INTERNAL_SERVER_ERROR");
  }
}
