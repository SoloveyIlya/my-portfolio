"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal-provider";

interface LeadMagnetProps {
  title?: string;
  description?: string;
}

export function LeadMagnet({
  title = "Готовы обсудить Ваш проект?",
  description = "Давайте созвонимся. Я отвечу на все вопросы и предложу оптимальное решение под ваш бюджет",
}: LeadMagnetProps = {}) {
  const { openModal } = useModal();
  return (
    <section className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      <div
        className="relative flex flex-col lg:flex-row items-center rounded-3xl overflow-visible px-4 py-6 lg:pl-0s"
        style={{
          backgroundImage: "url('/media/lead-magnet-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Photo — sticks out above */}
        <div className="hidden lg:flex w-1/2 flex-shrink-0 justify-center items-end self-end">
          <Image
            src="/media/portrait-2.png"
            alt="Илья Соловьёв"
            width={385}
            height={420}
            className="object-contain object-bottom translate-y-6 -mt-24"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E2A3A] uppercase leading-tight text-center lg:text-left">
            {title}
          </h2>
          <p className="text-base text-[#1E2A3A]/80 leading-relaxed max-w-md text-center lg:text-left">
            {description}
          </p>
          <div>
            <Button className="w-full sm:w-auto" onClick={openModal}>
              Бесплатная консультация
            </Button>
          </div>
        </div>

        {/* Photo — mobile: below text, desktop: left side sticking out */}
        <div className="flex lg:hidden w-full justify-center">
          <Image
            src="/media/portrait-2.png"
            alt="Илья Соловьёв"
            width={280}
            height={320}
            className="object-contain translate-y-6"
          />
        </div>
      </div>
    </section>
  );
}
