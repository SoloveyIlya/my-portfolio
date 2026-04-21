"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Category = "Лендинги" | "Корпоративные сайты";

interface Project {
  image: string;
  title: string;
  category: Category;
  url: string;
}

const tabs = ["Все проекты", "Лендинги", "Корпоративные сайты"];

const projects: Project[] = [
  {
    image: "/media/portfolio-1.jpg",
    title: "Услуги премиум клининга Time2Clean",
    category: "Корпоративные сайты",
    url: "http://time2clean.ru",
  },
  {
    image: "/media/portfolio-2.jpg",
    title: "Сайт агентства недвижимости Метеор",
    category: "Корпоративные сайты",
    url: "https://meteor-dom.ru",
  },
  {
    image: "/media/portfolio-3.jpg",
    title: "Сайт IT компании Intezgroup на Битрикс",
    category: "Корпоративные сайты",
    url: "https://intezgroup.ru",
  },
  {
    image: "/media/portfolio-4.jpg",
    title: "Лендинг по системе LOCKOUT TAGOUT",
    category: "Лендинги",
    url: "http://lockout-system.ru",
  },
  {
    image: "/media/portfolio-5.jpg",
    title: "Лендинг для продажи детских курток COOL BRAND",
    category: "Лендинги",
    url: "https://cool-brand.by",
  },
  {
    image: "/media/portfolio-6.jpg",
    title: "Сайт для сервиса Свой Мастер 96 с услугами по ремонту техники",
    category: "Корпоративные сайты",
    url: "https://new.svoymaster96.ru",
  },
  {
    image: "/media/portfolio-7.jpg",
    title: "Интернет магазин детского бренда комбинезонов Ice Tomas",
    category: "Корпоративные сайты",
    url: "https://icetomas.ru",
  },
  {
    image: "/media/portfolio-8.jpg",
    title: "Лендинг с услугами размещения на платформе weekend.by",
    category: "Лендинги",
    url: "https://weekend.by/site/landing",
  },
  {
    image: "/media/portfolio-9.jpg",
    title: "Лендинг с услугами получения резидентства/гражданства в ЕС",
    category: "Лендинги",
    url: "https://smart-eu-solution.ru",
  },
  {
    image: "/media/portfolio-10.jpg",
    title: "Лендинг для производства изделий из кварца «Quartz-X»",
    category: "Лендинги",
    url: "https://quartz-x.ru",
  },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const filtered =
    activeTab === 0
      ? projects
      : projects.filter((p) => p.category === tabs[activeTab]);

  const [featuredProject, ...smallProjects] = filtered.slice(0, 5);

  return (
    <section id="portfolio" aria-label="Портфолио проектов" className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-16 lg:pt-24">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-3 items-center lg:items-start">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1E2A3A] uppercase text-center lg:text-left">
          Реальные проекты — в цифрах и деталях
        </h2>
        <p className="text-base text-zinc-500 text-center lg:text-left">
          Сайты, которые уже работают на бизнес моих клиентов
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 bg-[#F0F2F5] rounded-full p-1.5 w-fit">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === i
                  ? "bg-[#1E2A3A] text-white"
                  : "text-zinc-600 hover:text-[#1E2A3A]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-zinc-400 text-sm py-12 text-center">Проектов в этой категории пока нет</p>
      ) : (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured — left */}
        <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-2xl overflow-hidden border border-zinc-100 cursor-pointer group order-2 lg:order-1">
          <div className="relative w-full aspect-square bg-zinc-100 flex items-center justify-center text-zinc-400 text-sm overflow-hidden">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => {}}
            />
          </div>
          <div className="flex flex-col gap-4 p-5 flex-1">
            <p className="text-base font-bold text-[#1E2A3A] leading-snug line-clamp-2">
              {featuredProject.title}
            </p>
            <div className="mt-auto">
              <Button
                variant="outline"
                className="gap-2 w-full lg:w-auto border-[#1E2A3A] text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open("https://www.fl.ru/users/ilyasolovey7/portfolio/", "_blank", "noopener,noreferrer");
                }}
              >
                Смотреть ещё
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </a>

        {/* Small projects — right */}
        {smallProjects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
          {smallProjects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 rounded-2xl overflow-hidden border border-zinc-100 cursor-pointer group"
            >
              <div className="relative w-full aspect-square bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => {}}
                />
              </div>
              <p className="text-sm font-bold text-[#1E2A3A] leading-snug line-clamp-2 px-4 pb-4">
                {project.title}
              </p>
            </a>
          ))}
        </div>
        )}
      </div>
      )}
    </section>
  );
}
