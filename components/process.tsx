"use client";

import Image from "next/image";
import { useModal } from "@/components/modal-provider";
import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Знакомство и анализ",
    description:
      "Созваниваемся, обсуждаем Ваш бизнес, цели и аудиторию. Я помогаю определиться с типом сайта и составляю четкое ТЗ",
  },
  {
    icon: Palette,
    title: "Прототип и дизайн",
    description:
      'Создаем "скелет" сайта (прототип), согласовываем структуру. Затем я рисую современный, понятный дизайн',
  },
  {
    icon: Code2,
    title: "Верстка и программирование",
    description:
      "Делаю сайт на удобной CMS (WordPress, Tilda или другой). Наполняю контентом, настраиваю формы заявок, подключаю оплату и аналитику",
  },
  {
    icon: Rocket,
    title: "Запуск и поддержка",
    description:
      "Передаю сайт вам, обучаю работе. После запуска я на связи, помогаю с правками и отвечаю на вопросы. Гарантия — 12 месяцев",
  },
];

export function Process() {
  const { openModal } = useModal();

  return (
    <section id="process" aria-label="Этапы работы над сайтом" className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Left — heading + photo */}
        <div className="flex flex-col gap-6 lg:w-1/2 shrink-0">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E2A3A] uppercase leading-tight text-center lg:text-left">
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
        <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="flex gap-4 items-start">
              {/* Icon circle */}
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1E2A3A 0%, #5374A0 100%)",
                }}
              >
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-[#1E2A3A]">{title}</h3>
                </div>
                <p className="text-base text-zinc-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
