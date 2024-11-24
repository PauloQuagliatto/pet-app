"use client"

import * as React from "react"
import { Bone, Dog, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function ThemeToggleButton() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="text-white hover:text-secondary dark:hover:text-white"
        asChild
      >
        <Button
          size="icon"
          variant="ghost"
        >
          <Bone
            className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Dog
            className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-primary">
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Button className="w-full" onClick={() => setTheme("light")}>
            Normal
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Button className="w-full" onClick={() => setTheme("dark")}>
            Caramelo
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

