"use client";

import { Check, ArrowRight } from "lucide-react";
import { useModal } from "@/components/modal-provider";
import { useRef, useEffect, useState } from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

function ServiceCard({ title, subtitle, price, duration, features, featured }: ServiceCardProps) {
  const { openModal } = useModal();

  return (
    <div className={`flex flex-col rounded-3xl overflow-hidden p-2 ${featured ? "bg-[#0066CC]" : "bg-[#F0F2F5]"}`}>
      {/* Header */}
      <div
        className="flex flex-col gap-4 px-4 lg:px-6 py-7 rounded-[22px]"
        style={
          featured
            ? {
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }
            : { background: "linear-gradient(135deg, #1E2A3A 0%, #5374A0 100%)" }
        }
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl text-white">{title}</h3>
          {featured && (
            <span className="shrink-0 text-xs font-bold text-[#0066CC] bg-white rounded-full px-3 py-1">
              Хит
            </span>
          )}
        </div>
        <div className="flex items-end gap-4 flex-wrap mt-1">
          <h2 className="text-3xl font-bold text-white leading-tight">{price}</h2>
          <span className="text-base font-semibold text-white/60 pb-1">{duration}</span>
        </div>
        <p className="text-base text-white leading-snug">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-5 px-4 lg:px-6 py-7 flex-1">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${featured ? "bg-white" : "bg-[#0066CC]"}`}>
              <Check className={`w-3 h-3 ${featured ? "text-[#0066CC]" : "text-white"}`} strokeWidth={3} />
            </div>
            <span className={`text-base leading-snug ${featured ? "text-white" : "text-[#1E2A3A]"}`}>{feature}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="px-4 lg:px-6 pb-6">
        <button
          onClick={openModal}
          className={`cursor-pointer text-white font-bold w-full items-center transition-colors rounded-full px-6 py-4 group ${
            featured
              ? "bg-[#1E2A3A] hover:bg-[#0d1520]"
              : "bg-[#0066CC] hover:bg-[#0052a3]"
          }`}
        >
            Оставить заявку
        </button>
      </div>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    title: "Лендинг",
    subtitle: "Для запуска продукта, услуги, рекламной кампании",
    price: "От 30 000 ₽",
    duration: "за 7 дней",
    features: [
      "Анализ ЦА, конкурентов и структура продаж",
      "Прототип всех блоков + согласование",
      "Индивидуальный дизайн (десктоп + мобайл)",
      "Адаптивная верстка",
      "Подключение форм заявок",
      "Размещение на хостинге и настройка аналитики",
    ],
  },
  {
    title: "Корпоративный сайт",
    subtitle: "Для компаний, которым важен имидж и доверие клиентов",
    price: "От 50 000 ₽",
    duration: "за 12 дней",
    featured: true,
    features: [
      "Всё из лендинга, плюс:",
      "Многостраничная структура",
      "Уникальный дизайн под бренд",
      "CMS для удобного управления",
      "SEO-оптимизация",
      "Интеграция с CRM и аналитикой",
      "Сопровождение в течение 1 месяца после запуска",
      "До 3 итераций правок на каждом этапе",
    ],
  },
  {
    title: "Поддержка / доработка",
    subtitle: "Для тех, у кого уже есть сайт и нужна помощь",
    price: "От 8 000 ₽",
    duration: "в месяц",
    features: [
      "Контроль работоспособности и исправление багов",
      "Внесение правок (тексты, фото, блоки)",
      "Добавление новых страниц и разделов",
      "Доработка функционала и улучшение UX",
      "Консультации и рекомендации по развитию",
    ],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" aria-label="Услуги по разработке сайтов" className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <div
        className="mb-10 flex flex-col gap-3 items-center lg:items-start"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
      >
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] uppercase font-bold text-[#1E2A3A] text-center lg:text-left">
          Услуги полностью «Под ключ»
        </h2>
        <p className="text-base text-zinc-500 text-center lg:text-left">
          Выберите подходящий формат — я возьму на себя весь процесс
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
