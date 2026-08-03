"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu } from "lucide-react";
import Image from "next/image";
import { US, EG } from "country-flag-icons/react/3x2";
import logo from "@/assets/logo/Logo.svg";
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

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";


type NavLink = {
  label: string;
  href: string;
};


const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Cases", href: "/cases" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };
  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur z-50 sticky top-0 ">
      <div className="container flex h-20 items-center justify-around">

        {/* Logo */}
        <Link href="/" className=" gap-3">
          <Image
            src={logo}
            alt="VU Platform Logo"
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">

            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>

                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-body transition-colors duration-200",
                    isActive(link.href)
                      ? "font-semibold text-primary"
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
          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1"
                  />
                }
              >
                <Globe className="size-5" />
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-2">
                  <US className="h-4 w-6 rounded-sm" />
                  <span>English</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center gap-2">
                  <EG className="h-4 w-6 rounded-sm" />
                  <span>Arabic</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              nativeButton={false}
              variant="ghost"
              render={<Link href="/login" />}
            >
              Log In
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              Get Started
            </Button>
          </div>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-75 bg-background p-6"
            >
              <nav className="mt-8 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-all",
                          isActive(link.href)
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-muted/80 hover:text-primary"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>

                ))}
                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="outline"
                          className="flex w-full items-center justify-between"
                        />
                      }
                    >
                      <span className="flex items-center gap-2">
                        <Globe className="size-4" />
                        Language
                      </span>
                      <ChevronDown className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                            <US className="h-4 w-6 rounded-sm" />
                            <span>English</span>
                          </DropdownMenuItem>

                          <DropdownMenuItem className="flex items-center gap-2">
                            <EG className="h-4 w-6 rounded-sm" />
                            <span>Arabic</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    nativeButton={false}
                    variant="ghost"
                    className="w-full justify-center"
                    render={<Link href="/login" />}
                  >
                    Log In
                  </Button>
                  <Button
                    nativeButton={false}
                    className="w-full justify-center"
                    render={<Link href="/signup" />}
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}