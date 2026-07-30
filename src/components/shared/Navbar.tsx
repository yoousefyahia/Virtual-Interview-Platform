"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Globe, Menu } from "lucide-react";
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
  { label: "About us", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Cases", href: "/#cases" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>("/");

  const isLinkActive = (href: string) => {
    if (activeHref === href) return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setActiveHref("/")}>
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
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveHref(link.href)}
                    className={cn(
                      "rounded-md px-4 py-2 text-body transition-colors duration-200",
                      active
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3">
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
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              nativeButton={false}
              variant="ghost"
              render={<Link href="/#login" />}
            >
              Log In
            </Button>

            <Button
              nativeButton={false}
              render={<Link href="/#get-started" />}
            >
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

          {/* Mobile Menu Drawer */}
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

            <SheetContent side="right" className="bg-background p-6 w-75">
              <nav className="mt-8 flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <SheetClose
                      nativeButton={false}
                      key={link.label}
                      render={
                        <Link
                          href={link.href}
                          onClick={() => setActiveHref(link.href)}
                          className={cn(
                            "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                            active
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-muted-foreground hover:bg-muted/80 hover:text-primary"
                          )}
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  );
                })}

                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="outline"
                          className="flex items-center justify-between w-full"
                        />
                      }
                    >
                      <span className="flex items-center gap-2">
                        <Globe className="size-4" /> Language
                      </span>
                      <ChevronDown className="size-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem>English</DropdownMenuItem>
                      <DropdownMenuItem>العربية</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    nativeButton={false}
                    variant="ghost"
                    className="w-full justify-center"
                    render={<Link href="/#login" />}
                  >
                    Log In
                  </Button>

                  <Button
                    nativeButton={false}
                    className="w-full justify-center"
                    render={<Link href="/#get-started" />}
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