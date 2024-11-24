"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


export default function NewOccurrence() {
  return (
    <div className="grid w-full md:w-[80%] lg:w-[60%] gap-6">
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
                    ></div>
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
