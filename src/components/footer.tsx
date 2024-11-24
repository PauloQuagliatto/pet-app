import { FilePlusIcon, HomeIcon, SettingsIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full p-4 bg-primary-background rounded-t-3xl">
      <div className="w-full md:w-[80%] lg:w-[60%] flex items-center justify-between">
        <FilePlusIcon className="text-white" />
        <HomeIcon className="text-white" />
        <SettingsIcon className="text-white" />
      </div>
    </footer>
  );
}
