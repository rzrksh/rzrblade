"use-client";

import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppThemeContext } from "@/app/context/theme";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const themeIcon = {
  system: <SunMoonIcon />,
  light: <SunIcon />,
  dark: <MoonIcon />,
};

const logo = {
  dark: "/rzrblade-dark-mode.svg",
  light: "/rzrblade-light-mode.svg",
};

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, handleChangeTheme } = useAppThemeContext();

  useEffect(() => setIsMounted(true), []);

  return (
    <header className="w-full z-10 bg-[var(--background))] border-b fixed top-0">
      <nav className="px-16 max-w-[var(--max-page-width)] mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            {isMounted && (
              <Image
                src={logo[theme]}
                width={100}
                height={17}
                draggable={false}
                alt="rzrblade logo"
              />
            )}
          </Link>
          <div className="flex text-sm p-2 gap-6 items-center">
            <Link href="/tools" className="inline-block">
              Tools
            </Link>
            <Link href="/about" className="inline-block">
              About
            </Link>
            <Link href="/" className="inline-block">
              Contribute
            </Link>
            <div className="min-h-[36px] min-w-[66px] mr-1">
              {isMounted && (
                <Select defaultValue={theme} onValueChange={handleChangeTheme}>
                  <SelectTrigger>{themeIcon[theme]}</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">
                      <SunMoonIcon /> System
                    </SelectItem>
                    <SelectItem value="light">
                      <SunIcon /> Light
                    </SelectItem>
                    <SelectItem value="dark">
                      <MoonIcon /> Dark
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
