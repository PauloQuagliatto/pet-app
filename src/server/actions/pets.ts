"use server";
import { petColors, pets } from "@/server/db/tables";
import { db } from "@/server/db";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { PetSchema, petSchema } from "@/schemas/petSchema";
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

    const res = petSchema.safeParse({
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

export async function createPet(newPet: PetSchema) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }
    const parseRes = petSchema.safeParse(newPet);

    if (!parseRes.success) throw new Error("Invalid data");

    const { data } = parseRes;

    const [createdPet] = await db.insert(pets).values({
      name: data.name,
      image: data.image,
      tutorId: session.user.id,
      birthDate: data.birthDate
    }).returning({ id: pets.id });

    Promise.all(data.colors.map(async (color) => (
      await db.insert(petColors).values({
        color: color.val,
        petId: createdPet.id
      })
    )));

    return { success: true };
  } catch (e) {
    console.log(e);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}

export async function updatePet(petData: NonNullable<PetSchema>) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }
    const parseRes = petSchema
      .refine(({ id }) => !!id, {
        message: "Id must exist"
      })
      .safeParse(petData);

    if (!parseRes.success) throw new Error("Invalid data");

    const { data } = parseRes;

    await db
      .update(pets)
      .set({
        name: data.name,
        image: data.image,
        birthDate: data.birthDate
      })
      .where(and(
        eq(pets.id, data.id as string),
        eq(pets.tutorId, session.user.id)
      ));

    Promise.all(
      data.colors.map(async (color) => (
        await db
          .update(petColors)
          .set({
            color: color.val,
          })
          .where(
            eq(petColors.petId, data.id as string)
          )
      ))
    );

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
