"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/portfolio" },
  ];

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-card shadow-md sticky top-0 z-50 animate-fade-in-down">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">
              Joe's Plumbing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative px-1 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 mx-auto h-0.5 w-full rounded-full bg-primary transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              );
            })}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link className="cursor-pointer" href="/booking">
              <Button className="cursor-pointer">Book Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation (overlay) */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-card border-t border-border shadow-lg animate-fade-in-down z-50">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 font-semibold transition-colors ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">
                  Toggle {theme === "dark" ? "Light" : "Dark"} Mode
                </span>
              </button>
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2">Book Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
