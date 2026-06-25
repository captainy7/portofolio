"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { personalInfo } from "@/data/portfolio";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  PenLine,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/notebooks", label: "Notebooks", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: PenLine },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b-2 bg-background px-4 py-3 lg:hidden">
        <Link href="/" className="font-bold text-lg">
          {personalInfo.name.split(" ")[0]}
          <span className="text-main">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-base border-2 border-border p-2 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-15.25 z-40 bg-background lg:hidden">
          <nav className="flex flex-col gap-1 p-4 pt-6">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-base border-2 px-4 py-3 text-sm font-medium transition-all",
                  pathname === href
                    ? "bg-main text-main-foreground border-border shadow-shadow"
                    : "border-transparent text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[240px] flex-col border-r-2 bg-sidebar-bg lg:flex">
        <div className="flex items-center gap-3 border-b-2 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border shadow-shadow overflow-hidden">
            {personalInfo.avatar ? (
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-main text-main-foreground">
                <span className="text-lg font-bold">
                  {personalInfo.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <Link
              href="/"
              className="text-sm font-bold leading-tight hover:text-main transition-colors"
            >
              {personalInfo.name}
            </Link>
            <p className="text-xs text-muted-foreground font-medium">
              {personalInfo.role}
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-base border-2 px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-main text-main-foreground border-border shadow-shadow"
                    : "border-transparent text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t-2 p-4">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
