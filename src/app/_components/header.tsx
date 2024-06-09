import { MenuIcon, ShareIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-primary md:px-16">
      <Button>
        <MenuIcon className="text-white md:text-lg" />
      </Button>
      <Button>
        <ShareIcon className="text-white" />
      </Button>
    </header>
  );
}
