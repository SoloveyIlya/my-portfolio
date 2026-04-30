"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useModal } from "@/components/modal-provider";
import { useState, useEffect } from "react";

const MAIN_PART = "Готовый инструмент для привлечения клиентов и запуска продаж ";
const BLUE_PART = "от 5 дней";
const FULL_TEXT = MAIN_PART + BLUE_PART;
const TYPING_SPEED = 35;

export function Hero() {
  const { openModal } = useModal();
  const [displayCount, setDisplayCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    if (displayCount >= FULL_TEXT.length) {
      setTypingDone(true);
      return;
    }
    const timer = setTimeout(() => setDisplayCount((c) => c + 1), TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [displayCount]);

  useEffect(() => {
    if (!typingDone) return;
    const timer = setTimeout(() => setBadgeVisible(true), 900);
    return () => clearTimeout(timer);
  }, [typingDone]);

  const mainShown = FULL_TEXT.slice(0, Math.min(displayCount, MAIN_PART.length));
  const blueShown =
    displayCount > MAIN_PART.length ? BLUE_PART.slice(0, displayCount - MAIN_PART.length) : "";

  return (
    <section aria-label="Разработка сайтов на заказ — Илья Соловьёв" className="mx-auto flex w-full min-h-screen flex-col lg:flex-row gap-12 lg:gap-0 pt-24 lg:pt-0">
      {/* Left */}
      <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left px-6">
        {/* Static hero header — at the very top of the page */}
        <div className="hidden lg:flex items-center justify-between w-full h-20">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-[#1E2A3A] tracking-tight">Илья Соловьёв</span>
            <span className="text-sm text-zinc-500 font-medium">Опытная разработка сайтов</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Портфолио", href: "#portfolio" },
              { label: "Услуги", href: "#services" },
              { label: "Отзывы", href: "#reviews" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium text-zinc-600 transition-colors hover:text-[#1E2A3A]">
                {link.label}
              </a>
            ))}
          </nav>
          <Button className="hidden md:inline-flex gap-2" onClick={openModal}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>Написать</Button>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:gap-8 items-center text-center lg:items-start lg:text-left justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E2A3A] uppercase max-w-[800px]">
          {mainShown}
          {blueShown && <span className="text-[#0066CC]">{blueShown}</span>}
          {!typingDone && (
            <span
              className="inline-block w-[3px] h-[0.85em] bg-[#1E2A3A] align-middle ml-1"
              style={{ animation: "blink 0.8s step-end infinite" }}
            />
          )}
        </h1>

        <p
          className="text-sm sm:text-base leading-relaxed text-zinc-500 transition-opacity duration-700"
          style={{ opacity: typingDone ? 1 : 0 }}
        >
          Полный цикл разработки сайтов: продуманная <br className="hidden sm:inline" />архитектура, продающие
          тексты, стильный дизайн
        </p>
        <div
          className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto transition-opacity duration-700"
          style={{ opacity: typingDone ? 1 : 0 }}
        >
          <Button className="w-full sm:w-auto" onClick={openModal}>Бесплатная консультация</Button>
          <a href="#portfolio">
            <Button variant="outline" className="w-full sm:w-auto border-[#1E2A3A] text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-white">Смотреть портфолио</Button>
          </a>
        </div>
        </div>
      </div>

      {/* Right — photo with badge */}
      <div
        className="relative w-full max-w-sm lg:max-w-[600px] lg:w-[40%] xl:max-w-[800px] xl:w-[45%] h-[600px] lg:h-screen"
      >
        <Image
          src="/media/portrait-v2.png"
          alt="Илья Соловьёв"
          width={600}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
        {/* Badge */}
        <div
          className="absolute left-6 lg:left-1/2 top-1/2 translate-y-20 w-[260px] px-5 py-4 backdrop-blur-md"
          style={{
            background: "rgba(0, 102, 204, 0.4)",
            borderRadius: "0px 28px 28px 28px",
            opacity: badgeVisible ? 1 : 0,
            transform: badgeVisible ? "scale(1)" : "scale(0.4)",
            transformOrigin: "top left",
            transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <p className="text-white text-base leading-snug">
            Делаю так, чтобы ваш проект приносил клиентов и работал на имидж компании
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
