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
];

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
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
    <section className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:w-1/3 shrink-0 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E2A3A]">
            А что если...
          </h2>
          <Button onClick={openModal} className="w-full sm:w-auto">
            Задать вопрос
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
