"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card } from "@/app/_components/ui/card";
import { Form } from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Textarea } from "@/app/_components/ui/textarea";

import { createOccurrenceSchema } from "@/schemas/createOccurrenceSchema";

export default function NewOccurrence() {
  return (
    <div className="grid w-full gap-6 md:px-12">
      <div className="w-full">
        <Card className="w-full bg-primary-background p-8">
          <form className="mb-8 flex w-full flex-col items-center gap-4">
            <Input />
            <Textarea placeholder="Descreva o acontencimento" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status do acontecimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EXCELENT">
                  <p className="flex items-center gap-2">
                    <div
                      className={"h-4 w-4 rounded-full bg-primary-background"}
                    ></div>{" "}
                    Bom
                  </p>
                </SelectItem>
                <SelectItem value="AVARAGE">
                  <p className="flex items-center gap-2">
                    <div className={"h-4 w-4 rounded-full bg-yellow-500"}></div>{" "}
                    Normal
                  </p>
                </SelectItem>
                <SelectItem value="BAD">
                  <p className="flex items-center gap-2">
                    <div className={"h-4 w-4 rounded-full bg-red-500"}></div>{" "}
                    Ruim
                  </p>
                </SelectItem>
              </SelectContent>
            </Select>
          </form>
        </Card>
      </div>
    </div>
  );
}
