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
    <section aria-label="Разработка сайтов на заказ — Илья Соловьёв" className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 pt-8 lg:pt-14">
      {/* Left */}
      <div className="flex flex-1 flex-col gap-6 lg:gap-8 items-center text-center lg:items-start lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E2A3A] uppercase">
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

      {/* Right — photo with badge */}
      <div
        className="relative w-full max-w-sm lg:max-w-none lg:w-[490px] h-[400px] lg:h-[600px] flex-shrink-0 transition-opacity duration-700"
        style={{ opacity: typingDone ? 1 : 0 }}
      >
        <Image
          src="/media/portrait-v2.png"
          alt="Илья Соловьёв"
          width={490}
          height={600}
          className="w-full h-full object-cover rounded-3xl"
          priority
        />
        {/* Badge */}
        <div
          className="absolute left-0 lg:left-1/2 top-1/2 translate-y-16 translate-x-10 w-[260px] px-5 py-4 backdrop-blur-md"
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
