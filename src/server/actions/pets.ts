"use server";
import { pets } from "@/server/db/tables";
import { db } from "@/server/db";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { CreatePetSchema } from "@/schemas/createPetSchema";

export async function getPets() {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }

    const petsList = await db.select().from(pets).where(eq(pets.tutorId, session.user.id));

    return petsList;

  } catch (e) {
    console.log(e);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}

export async function createPet(newPet: CreatePetSchema) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }

    const petsList = await db.select().from(pets).where(eq(pets.tutorId, session.user.id));

    return petsList;

  } catch (e) {
    console.log(e);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}
