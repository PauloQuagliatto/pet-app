import { FilePlusIcon, HomeIcon, SettingsIcon } from "lucide-react";

export function Footer() {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-primary-background rounded-t-3xl">
      <FilePlusIcon className="text-white" />
      <HomeIcon className="text-white" />
      <SettingsIcon className="text-white" />
    </nav>
  );
}
