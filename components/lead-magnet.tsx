"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal-provider";
import { CheckCircle } from "lucide-react";

interface LeadMagnetProps {
  title?: React.ReactNode;
  description?: string;
  showForm?: boolean;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export function LeadMagnet({
  title = "Готовы обсудить Ваш проект?",
  description = "Давайте созвонимся. Я отвечу на все вопросы и предложу оптимальное решение под ваш бюджет",
  showForm = false,
  image = "/media/portrait-2.png",
  imageWidth = 385,
  imageHeight = 420,
}: LeadMagnetProps = {}) {
  const { openModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const contact = (form.elements.namedItem("contact") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Ошибка отправки. Попробуйте ещё раз.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Ошибка сети. Проверьте соединение и попробуйте снова.");
    } finally {
      setLoading(false);
    }
  }

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
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm rounded-3xl" />
        {/* Photo — sticks out above */}
        <div className="relative z-10 hidden lg:flex w-1/2 flex-shrink-0 justify-center items-end self-end">
          <Image
            src={image}
            alt="Илья Соловьёв"
            width={imageWidth}
            height={imageHeight}
            className="object-contain object-bottom translate-y-6 -mt-24"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E2A3A] uppercase leading-tight text-center lg:text-left">
            {title}
          </h2>
          <p className="text-base text-[#1E2A3A]/80 leading-relaxed max-w-md text-center lg:text-left">
            {description}
          </p>
          {showForm ? (
            submitted ? (
              <div className="flex flex-col items-center lg:items-start gap-3 py-2 text-center lg:text-left">
                <CheckCircle className="w-12 h-12 text-[#0066CC]" strokeWidth={1.5} />
                <p className="text-lg font-bold text-[#1E2A3A]">Заявка отправлена!</p>
                <p className="text-sm text-[#1E2A3A]/70">Свяжусь с вами в течение 1 часа.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md" suppressHydrationWarning>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-[#1E2A3A]/20 bg-white/80 px-4 py-3 text-sm text-[#1E2A3A] placeholder:text-zinc-400 outline-none focus:border-[#0066CC] transition-colors"
                  suppressHydrationWarning
                />
                <input
                  name="contact"
                  type="text"
                  required
                  placeholder="Telegram или телефон"
                  className="w-full rounded-xl border border-[#1E2A3A]/20 bg-white/80 px-4 py-3 text-sm text-[#1E2A3A] placeholder:text-zinc-400 outline-none focus:border-[#0066CC] transition-colors"
                  suppressHydrationWarning
                />
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Кратко о проекте (необязательно)"
                  className="w-full rounded-xl border border-[#1E2A3A]/20 bg-white/80 px-4 py-3 text-sm text-[#1E2A3A] placeholder:text-zinc-400 outline-none focus:border-[#0066CC] transition-colors resize-none"
                  suppressHydrationWarning
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            )
          ) : (
            <div>
              <Button className="w-full sm:w-auto" onClick={openModal}>
                Бесплатная консультация
              </Button>
            </div>
          )}
        </div>

        {/* Photo — mobile: below text, desktop: left side sticking out */}
        <div className="relative z-10 flex lg:hidden w-full justify-center">
          <Image
            src={image}
            alt="Илья Соловьёв"
            width={Math.round(imageWidth * 280 / 385)}
            height={Math.round(imageHeight * 320 / 420)}
            className="object-contain translate-y-6"
          />
        </div>
      </div>
    </section>
  );
}
