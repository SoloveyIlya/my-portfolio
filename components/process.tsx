"use client";

import Image from "next/image";
import { useModal } from "@/components/modal-provider";
import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: MessageCircle,
    title: "Знакомство и анализ",
    description: "Созваниваемся, обсуждаем Ваш бизнес, цели и аудиторию. Я помогаю определиться с типом сайта и составляю четкое ТЗ",
    duration: "1–2 дня",
  },
  {
    icon: Palette,
    title: "Прототип и дизайн",
    description: 'Создаем "скелет" сайта (прототип), согласовываем структуру. Затем я рисую современный, понятный дизайн',
    duration: "2–4 дня",
  },
  {
    icon: Code2,
    title: "Верстка и программирование",
    description: "Делаю сайт на удобной CMS (WordPress, Tilda или другой). Наполняю контентом, настраиваю формы заявок, подключаю оплату и аналитику",
    duration: "3–7 дней",
  },
  {
    icon: Rocket,
    title: "Запуск и поддержка",
    description: "Передаю сайт вам, обучаю работе. После запуска я на связи, помогаю с правками и отвечаю на вопросы. Гарантия — 12 месяцев",
    duration: "1 день + 12 мес.",
  },
];

export function Process() {
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" aria-label="Этапы работы над сайтом" className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Left — heading + photo */}
        <div className="flex flex-col gap-6 lg:w-1/2 shrink-0">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#1E2A3A] uppercase leading-tight text-center lg:text-left">
              Этапы работы над проектом
            </h2>
            <p className="text-base text-zinc-500 leading-relaxed text-center lg:text-left">
              Лично веду проект от прототипа до релиза и поддержки
            </p>
          </div>

          {/* Photo with consultation button */}
          <div className="relative w-full">
            <div className="relative rounded-[24px] lg:rounded-[50px] overflow-hidden aspect-[1/1]">
              <Image
                src="/media/process-v2.png"
                alt="Илья Соловьёв"
                fill
                className="object-cover object-top"
              />
              {/* Hover overlay */}
              {steps.map(({ icon: Icon, title, description, duration }, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex flex-col justify-start p-6 lg:p-10 transition-opacity duration-300"
                  style={{
                    background: "rgba(20, 30, 48, 0.82)",
                    opacity: hoveredIndex === i || expandedIndex === i ? 1 : 0,
                    pointerEvents: "none",
                  }}
                >
                  <span className="text-5xl font-bold text-white/20 leading-none mb-4">0{i + 1}</span>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#0066CC" }}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">{description}</p>
                  <span className="inline-flex self-start items-center rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-xs font-semibold text-white">
                    {duration}
                  </span>
                </div>
              ))}
            </div>
            {/* Badge button */}
            <button
              onClick={openModal}
              className="cursor-pointer absolute -top-3 -right-0 w-24 h-24 lg:-top-4 lg:-right-4 lg:w-36 lg:h-36 rounded-full flex items-center justify-center text-center text-xs lg:text-sm font-bold text-white leading-snug shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "#0066CC",
              }}
            >
              Бесплатная консультация
            </button>
          </div>
        </div>

        {/* Right — steps */}
        <div className="flex flex-col gap-3 lg:w-1/2 justify-center">
          {steps.map(({ icon: Icon, title, duration, description }, i) => (
            <div
              key={title}
              className="cursor-pointer rounded-2xl border border-zinc-200 px-5 py-4 transition-all duration-200"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(32px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.12}s, transform 0.5s ease ${0.1 + i * 0.12}s, background 0.2s ease, border-color 0.2s ease`,
                background: hoveredIndex === i ? "#1E2A3A" : "white",
                borderColor: hoveredIndex === i ? "#1E2A3A" : undefined,
              }}
            >
              <div className="flex gap-4 items-center">
                {/* Icon circle */}
                <div
                  className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: hoveredIndex === i ? "#0066CC" : "linear-gradient(135deg, #1E2A3A 0%, #5374A0 100%)",
                  }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                {/* Text */}
                <h3
                  className="flex-1 text-base font-bold transition-colors duration-200"
                  style={{ color: hoveredIndex === i ? "white" : "#1E2A3A" }}
                >
                  {title}
                </h3>
                {/* Duration badge */}
                <span
                  className="shrink-0 text-xs font-semibold rounded-full px-3 py-1.5 transition-all duration-200"
                  style={{
                    background: hoveredIndex === i ? "rgba(255,255,255,0.15)" : "#F0F2F5",
                    color: hoveredIndex === i ? "white" : "#1E2A3A",
                  }}
                >
                  {duration}
                </span>
              </div>
              {/* Mobile expandable description — removed, shown on photo overlay */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
