import { CardContent, Card } from "@/app/_components/ui/card"
import { cn } from "@/lib/utils"
import { CalendarIcon, CheckCircleIcon } from "lucide-react"
import { Button } from "../_components/ui/button"

const HistoriaAnimal = [{id: `pet`, createdAt: new Date() , occurency: "banho", status: "GOOD"}, {id: `peto`, createdAt: new Date() , occurency: "cirurgia", status: "BAD"}]
 
export default function Component() {
  return (
    <> 
   <div>
   <CalendarIcon className="h-6 w-6 text-gray-500" />
        <div className="text-2xl font-bold">April 1, 2024</div>
        <div className="ml-auto">
          <Button size="sm">New Occurrence</Button>
        </div>
        </div>
    <div className="grid gap-6">
      {HistoriaAnimal.map((animal) => (
      <Card key = {animal.id}>
        <CardContent className="space-y-2 flex items-center space-x-4 border p-4 rounded-lg bg-primary-background">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className= {cn ("h-4 w-4 rounded-full", (animal.status==="BAD"? "text-red-500":animal.status==="AVARAGE"? "text-yellow-500":"text-primary"))}/>
            <div className="leading-tight">
              <div>{animal.occurency}</div>
              <div className="text-sm font-normal leading-none text-gray-500">{animal.createdAt.toLocaleDateString()}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      ))}
    </div>
    </>
  )
}

