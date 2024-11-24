import Image from "next/image"
import {
  HeartIcon,
  TriangleAlertIcon
} from "lucide-react";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full md:w-[80%] lg:w-[60%] grid grid-cols-1 gap-4">
      <h1 className="text-lg font-semibold">Novidades</h1>
      <div className="flex justify-start gap-4">
        <Button
          className="h-auto p-4 rounded-full"
          variant="destructive"
          asChild
        >
          <Link
            href="mating"
          >
            <HeartIcon className="w-6 h-6 text-white" />
          </Link>
        </Button>
        <Button
          className="h-auto p-4 rounded-full"
          variant="destructive"
          asChild
        >
          <Link href="warnings">
            <TriangleAlertIcon className="w-6 h-6 text-white" />
          </Link>
        </Button>
      </div>
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
