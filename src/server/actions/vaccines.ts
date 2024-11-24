"use server";
import { randomUUID } from "crypto";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { VaccineSchema } from "@/schemas/vaccineSchema";
import { auth } from "../auth";
import { db } from "../db";
import { pets, users, vaccines, vets } from "../db/tables";

export async function getPetVaccines(id: string) {
  try {
    const session = await auth();
    if (!session) {
      return redirect("/");
    }

    const petVaccines = await db
      .select({
        id: vaccines.id,
        name: vaccines.name,
        appliedAt: vaccines.appliedAt,
        image: vaccines.image,
        description: vaccines.description,
        applierId: vaccines.applierId,
        applierName: users.name,
        vetId: vets.id
      })
      .from(vaccines)
      .where(
        and(
          eq(pets.tutorId, session.user.id),
          eq(vaccines.petId, id)
        )
      )
      .leftJoin(pets, eq(vaccines.petId, pets.id))
      .leftJoin(users, eq(vaccines.applierId, users.id))
      .leftJoin(vets, eq(users.id, vets.userId));

    return petVaccines.map((vaccine) => ({
      id: vaccine.id,
      name: vaccine.name,
      appliedAt: vaccine.appliedAt,
      image: vaccine.image,
      description: vaccine.description,
      applierId: vaccine.applierId,
      applierName: vaccine.applierName,
      vetId: vaccine.vetId ? true : false
    }));
  } catch (e) {
    throw new Error("Internal Server Error");
  }
}

export async function saveVaccine(data: VaccineSchema) {
  try {
    const id = randomUUID();
    await db
      .insert(vaccines)
      .values({
        id,
        name: data.name,
        image: data.image,
        petId: data.petId,
        description: data.description,
        appliedAt: new Date(),
        applierId: data.applierId,
      });

    return;
  } catch (e) {
    throw new Error("Não foi possível salvar a nova vacina, tente novamente");
  }
}
