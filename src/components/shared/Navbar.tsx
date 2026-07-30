import Link from "next/link";
import { ArrowRight, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/Logo.svg";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};
const NAV_LINKS: NavLink[]   = [
  { label: "Home", href: "/", active: true },
  { label: "About us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Cases", href: "#cases" },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="container flex h-20 items-center justify-around">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="VU Platform Logo"
              className="h-12 w-auto"
              priority
            />
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-body transition-colors",
                    link.active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    className="hidden sm:flex items-center gap-1"
                  />
                }
              >
                <Globe className="size-5" />
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
              <Button
                nativeButton={false}

                variant="ghost"
                className="hidden sm:flex hover:bg-primary/10"
                render={<Link href="#login" />}
              >
                Log In
              </Button>

              <Button
                nativeButton={false}
                size="lg"
                render={<Link href="#get-started" />}
              >
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
        </div>
      </div>
    </header>
  );
}