"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal-provider";

const navLinks = [
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги", href: "#services" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-[#1E2A3A] tracking-tight">
            Илья Соловьёв
          </span>
          <span className="text-sm text-zinc-500 font-medium">
            Опытная разработка сайтов
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-zinc-600 transition-colors hover:text-[#1E2A3A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button className="hidden md:inline-flex" onClick={openModal}>Обсудить проект</Button>

        {/* Burger */}
        <button
          className="flex md:hidden flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1E2A3A] transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1E2A3A] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1E2A3A] transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-zinc-600 hover:text-[#1E2A3A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-2" onClick={() => { setOpen(false); openModal(); }}>Обсудить проект</Button>
        </div>
      )}
    </header>
  );
}
