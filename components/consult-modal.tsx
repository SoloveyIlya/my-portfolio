"use client";

import { useEffect, useRef, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
}

export function ConsultModal({ open, onClose }: ConsultModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      document.body.style.overflow = "";
      // сбросить состояние после закрытия
      setTimeout(() => {
        setSubmitted(false);
        setError(null);
      }, 300);
    }
  }, [open]);

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
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="w-full max-w-lg rounded-3xl p-0 shadow-2xl m-auto backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:flex-col"
    >
      <div className="flex flex-col gap-6 p-8">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer text-zinc-400 hover:text-zinc-700 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle className="w-16 h-16 text-[#0066CC]" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-[#1E2A3A] uppercase leading-tight">
              Заявка отправлена!
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Я свяжусь с вами в течение 1 часа. Будем на связи!
            </p>
            <Button className="mt-2 w-full" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-col gap-2 -mt-4">
              <h2 className="text-2xl font-bold text-[#1E2A3A] uppercase leading-tight">
                Давайте обсудим ваш проект
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Оставьте контакт — я свяжусь в течение 1 часа, отвечу на все
                вопросы и предложу решение под ваш бюджет
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#1E2A3A]" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-[#1E2A3A] placeholder:text-zinc-400 outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#1E2A3A]" htmlFor="contact">
                  Email или мессенджер
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="email@example.com или @username"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-[#1E2A3A] placeholder:text-zinc-400 outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#1E2A3A]" htmlFor="message">
                  Расскажите о проекте{" "}
                  <span className="text-zinc-400 font-normal">(необязательно)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Что нужно сделать, какой бюджет, сроки..."
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-[#1E2A3A] placeholder:text-zinc-400 outline-none focus:border-[#0066CC] transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? "Отправка..." : "Отправить заявку"}
              </Button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
