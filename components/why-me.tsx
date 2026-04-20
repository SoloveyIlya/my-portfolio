"use client";

import { FileText, Clock, Monitor, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Фиксированная цена в договоре",
    description: "Никаких скрытых платежей и доплат в процессе разработки",
    icon: FileText,
  },
  {
    title: "Понятные сроки без задержек",
    description:
      "Каждый этап сдается вовремя — от прототипа до финального запуска",
    icon: Clock,
  },
  {
    title: "Сайт, который удобно вести самому",
    description:
      "Работа на популярных CMS (WordPress, Tilda, OpenCart) с понятной админ-панелью",
    icon: Monitor,
  },
  {
    title: "Гарантия 12 месяцев после запуска",
    description:
      "Исправление ошибок, консультации, небольшие правки — без доплат",
    icon: ShieldCheck,
  },
];

export function WhyMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <h2
        className="text-3xl lg:text-4xl font-bold text-[#1E2A3A] mb-12 uppercase text-center lg:text-left"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Почему выбирают работу со мной
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ title, description, icon: Icon }, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={title}
              className="relative flex flex-col justify-between gap-4 rounded-2xl p-6 min-h-[200px]"
              style={{
                ...(isOdd
                  ? { background: "#F0F2F5" }
                  : { background: "linear-gradient(to bottom, #1E2A3A, #5374A0)" }),
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.5s ease ${0.15 + index * 0.1}s, transform 0.5s ease ${0.15 + index * 0.1}s`,
              }}
            >
              <div className="flex flex-col gap-3">
                <h3
                  className="text-xl font-bold leading-snug"
                  style={{ color: isOdd ? "#1E2A3A" : "#ffffff" }}
                >
                  {title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: isOdd ? "#71717a" : "#cbd5e1" }}
                >
                  {description}
                </p>
              </div>
              <div className="flex justify-end">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={
                    isOdd
                      ? { background: "linear-gradient(to bottom, #1E2A3A, #5374A0)" }
                      : { background: "#F0F2F5" }
                  }
                >
                  <Icon
                    className="w-6 h-6"
                    strokeWidth={1.5}
                    style={{ color: isOdd ? "#F0F2F5" : "#1E2A3A" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
