import Image from "next/image";

import { Card } from "@/components/ui/card";

export default function Warnings() {
  return(
    <div className="w-full md:w-[80%] lg:w-[60%] grid grid-cols-1 gap-4">
      <h1 className="text-lg font-semibold">Namoricos</h1>
      <div className="space-y-4">
        <Card className="overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="news-image"
            className="w-full h-48 object-cover"
            width="350"
            height="200"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover"
            }}
          />
          <div className="p-4">
            <h2 className="text-base font-semibold">
              Cachorro fofo corre
            </h2>
            <p className="text-sm text-muted-foreground">
              Um saatchinha serelepe corre em direção ao dono
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
