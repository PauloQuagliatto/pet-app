"use server";
import { petColors, pets } from "@/server/db/tables";
import { db } from "@/server/db";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { CreatePetSchema, createPetSchema } from "@/schemas/createPetSchema";
import { z } from "zod";

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

export async function getPet(id: string) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }

    const [dbPet] = await db
      .select()
      .from(pets)
      .where(and(
        eq(pets.tutorId, session.user.id),
        eq(pets.id, id))
      );

    if (!dbPet) {
      return null;
    }

    const colors = await db
      .select()
      .from(petColors)
      .where(eq(petColors.petId, dbPet.id));

    const res = createPetSchema.extend({ id: z.string() }).safeParse({
      ...dbPet,
      colors: colors.map((color) => ({
        val: color.color
      }))
    });

    if (!res.success) {
      return null;
    }
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function createPet(newPet: CreatePetSchema) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }
    const [insertedPet] = await db.insert(pets).values({
      name: newPet.name,
      image: newPet.image,
      tutorId: session.user.id,
      birthDate: newPet.birthDate
    }).returning({ id: pets.id });

    Promise.all(newPet.colors.map(async (color) => (
      await db.insert(petColors).values({
        color: color.val,
        petId: insertedPet.id
      })
    )));

    return { success: true };
  } catch (e) {
    console.log(e);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}

export async function updatePet(petData: CreatePetSchema & { id: string }) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }
    await db
      .update(pets)
      .set({
        name: petData.name,
        image: petData.image,
        birthDate: petData.birthDate
      })
      .where(and(
        eq(pets.tutorId, session.user.id),
        eq(pets.id, petData.id)
      ));

    Promise.all(petData.colors.map(async (color) => (
      await db
        .update(petColors)
        .set({
          color: color.val,
        })
        .where(
          eq(petColors.petId, petData.id)
        )
    )));

    return { success: true };
  } catch (e) {
    console.log(e);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}

export async function deletePet(id: string) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }

    await db
      .delete(pets)
      .where(
        and(
          eq(pets.tutorId, session.user.id),
          eq(pets.id, id)
        )
      );
  } catch (e) {
    console.log(e);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}
