
import { relations } from "drizzle-orm";
import { pets, diary } from "../tables";

export const diaryRelations = relations(diary, ({ one }) => ({
  pet: one(pets, {
    fields: [diary.petId],
    references: [pets.id]
  })
}));
