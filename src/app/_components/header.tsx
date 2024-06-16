import { MenuIcon, ShareIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-primary-background md:px-16">
      <Button variant={"ghost"}>
        <MenuIcon className="text-white md:text-lg" />
      </Button>
      <Button variant={"ghost"}>
        <ShareIcon className="text-white" />
      </Button>
    </header>
  );
}
