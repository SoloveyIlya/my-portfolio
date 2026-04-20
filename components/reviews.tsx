"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface ReviewCardProps {
  text: string;
  avatar: string;
  name: string;
  role: string;
}

function ReviewCard({ text, avatar, name, role }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-6 bg-[#F0F2F5] rounded-3xl p-6 lg:p-8 h-full">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "linear-gradient(135deg, #1E2A3A 0%, #5374A0 100%)" }}
      >
        <Quote className="w-5 h-5 text-[#F0F2F5]" strokeWidth={1.5} />
      </div>
      <p className="text-base text-[#1E2A3A] leading-relaxed flex-1 whitespace-pre-line">{text}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-[#1E2A3A]">{name}</span>
          <span className="text-xs text-zinc-500">{role}</span>
        </div>
      </div>
    </div>
  );
}

const reviews: ReviewCardProps[] = [
  {
    text: "Хочу выразить свою благодарность Илье за отличную работу! Он настоящая находка для нашего проекта.\n\nИлья был всегда на связи, что очень ценно для эффективного взаимодействия. Он смог реализовать все наши пожелания и учесть все детали, даже несмотря на сложность нашего проекта.\n\nЕго умение вникнуть в задачу и разобраться в нюансах действительно впечатляет. Мы очень довольны результатом и обязательно будем обращаться к нему снова в будущем!\n\nРекомендуем всем, кто ищет профессионала своего дела!",
    avatar: "/media/review-1.png",
    name: "Ольга Скрипченко",
    role: "Сооснователь «Realty Ruler»",
  },
  {
    text: "Рекомендую Илью смело! Работал с ним над проектом сайта для агентства недвижимости, остался в полном восторге.\n\nИлья не просто «выполнял ТЗ», а действительно вник в задачу. Задавал уточняющие вопросы, уточнял нюансы, которые я сам поначалу не продумал. Было ощущение, что человек искренне заинтересован в том, чтобы сделать именно то, что мне нужно.\n\nНа каждом этапе показывал промежуточные результаты, объяснял, что и почему делает.\n\nВсе сроки соблюдались!",
    avatar: "/media/review-2.png",
    name: "Александр",
    role: "Менеджер «Метеор»",
  },
  {
    text: "Сайт нужен был срочно — к началу сезона продаж. Илья сделал за 3 недели (даже быстрее, чем планировали). Удобная корзина, понятная админка, быстро настроили оплату.\n\nПосле запуска сайт не зависает, всё работает стабильно. Отдельное спасибо за то, что после сдачи проекта оставался на связи и помогал с настройкой рекламы. Рекомендую как ответственного и адекватного разработчика.",
    avatar: "/media/review-3.png",
    name: "Татьяна Степанова",
    role: "Директор «Ice Tomas»",
  },
];

export function Reviews() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  }

  return (
    <section id="reviews" className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2 w-full lg:w-auto items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E2A3A]">
            Меня рекомендуют клиенты
          </h2>
          <p className="text-base text-zinc-500">Реальные отзывы о сотрудничестве</p>
        </div>
        <div className="hidden lg:flex gap-2 shrink-0">
          <button
            onClick={prev}
            aria-label="Предыдущий отзыв"
            className="cursor-pointer w-11 h-11 rounded-full border-2 border-[#1E2A3A] flex items-center justify-center text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Следующий отзыв"
            className="cursor-pointer w-11 h-11 rounded-full bg-[#1E2A3A] flex items-center justify-center text-white hover:bg-[#0066CC] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden lg:max-w-2xl lg:mx-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(calc(-${index * 100}% - ${index * 24}px))` }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="w-full shrink-0 mr-6 last:mr-0"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Отзыв ${i + 1}`}
            className={`cursor-pointer h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#0066CC]" : "w-2 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
