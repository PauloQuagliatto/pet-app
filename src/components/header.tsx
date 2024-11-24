"use client"
import { MenuIcon, ShareIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full bg-primary-background dark:bg-primary-background flex items-center justify-center p-4">
      <div className="w-full md:w-[80%] lg:w-[60%] flex items-center justify-between">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <MenuIcon className="text-white md:text-lg" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
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
              <Button asChild>
                <Link href={"/vaccination"}>Vacinas</Link>
              </Button>
            </nav>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="flex gap-2 align-center justify-center">
          <ThemeToggleButton />
          <Button variant={"ghost"}>
            <ShareIcon className="text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}
