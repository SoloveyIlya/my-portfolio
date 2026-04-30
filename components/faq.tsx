"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal-provider";

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqs: FaqItemProps[] = [
  {
    question: "Мой бюджет ограничен и не дотягивает до указанных цен",
    answer:
      "Я подбираю решение под любые задачи. Если стандартный пакет выходит за рамки бюджета — предложу альтернативу: например, сайт на конструкторе с минимальной настройкой, разделение проекта на этапы или только необходимый функционал.\n\nСвяжитесь, обсудим, как уложиться в вашу сумму.",
  },
  {
    question: "У меня нет готового технического задания, только идея",
    answer:
      "Это нормально — большинство клиентов приходят именно с идеей. На первом созвоне я задаю нужные вопросы, помогаю структурировать мысли и сам составляю подробное ТЗ. Вам останется только согласовать.",
  },
  {
    question: "Боюсь, что получится не то, что ожидал",
    answer:
      "Именно поэтому работа строится поэтапно: сначала прототип, потом дизайн — и только после вашего согласования начинается разработка. На каждом шаге вы видите результат и можете вносить правки. Сюрпризов не будет.",
  },
  {
    question: "Вы помогаете с размещением сайта?",
    answer:
      "Да, размещение входит в стоимость проекта. Я самостоятельно настраиваю хостинг, домен, SSL-сертификат и переношу сайт на сервер. Вам не нужно разбираться в технических деталях — вы просто получаете готовый работающий сайт.\n\nЕсли у вас уже есть хостинг или домен — перенесу сайт туда.",
  },
];

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="cursor-pointer w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-bold text-[#1E2A3A] leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-zinc-500 leading-relaxed whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const { openModal } = useModal();

  return (
    <section id="faq" aria-label="Часто задаваемые вопросы" className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:w-1/3 shrink-0 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#1E2A3A]">
            А что если...
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Не нашли ответ? Напишите в Telegram — <br />отвечу в течение 15 мин
          </p>
          <Button onClick={() => window.open('https://t.me/ilyasalauyou', '_blank')} className="w-full sm:w-auto gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Написать
          </Button>
        </div>

        {/* Right — accordion */}
        <div className="flex-1">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
