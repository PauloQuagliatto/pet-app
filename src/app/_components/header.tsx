import { MenuIcon, ShareIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import DashboardPage from "../(protected)/dashboard/page";
import { diary, pets } from "@/server/db/tables";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-primary-background p-4 md:px-16">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"}>
            <MenuIcon className="text-white md:text-lg" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="grid grid-cols-1 items-center gap-4 py-4">
              <Button asChild>
                <Link href={"/dashboard"}>Inicio</Link>
              </Button>
              <Button asChild>
                <Link href={"/diary"}>Diario</Link>
              </Button>
              <Button asChild>
                <Link href={"/pets"}>Meus Pets</Link>
              </Button>
            </nav>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Button variant={"ghost"}>
        <ShareIcon className="text-white" />
      </Button>
    </header>
  );
}
