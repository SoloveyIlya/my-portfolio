export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Илья Соловьёв",
    jobTitle: "Веб-разработчик",
    description:
      "Разработка лендингов и корпоративных сайтов на заказ. Полный цикл: анализ, прототип, дизайн, разработка, запуск.",
    url: "https://ilyasolovyov.ru",
    sameAs: [
      "https://t.me/ilyasalauyou",
      "https://vk.ru/i.solovyou",
      "https://github.com/SoloveyIlya",
    ],
    knowsAbout: [
      "Веб-разработка",
      "Разработка лендингов",
      "Корпоративные сайты",
      "WordPress",
      "Tilda",
      "OpenCart",
      "UI/UX дизайн",
      "SEO-оптимизация",
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Разработка сайтов — Илья Соловьёв",
    description:
      "Разработка лендингов и корпоративных сайтов на заказ. Готовый сайт от 5 дней, фиксированная цена в договоре, гарантия 12 месяцев.",
    url: "https://ilyasolovyov.ru",
    provider: {
      "@type": "Person",
      name: "Илья Соловьёв",
    },
    serviceType: [
      "Разработка лендинга",
      "Разработка корпоративного сайта",
      "Поддержка и доработка сайта",
    ],
    areaServed: {
      "@type": "Country",
      name: "Россия",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Лендинг",
        description:
          "Для запуска продукта, услуги, рекламной кампании. Анализ ЦА, прототип, дизайн, адаптивная верстка, подключение форм и аналитики.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "30000",
          priceCurrency: "RUB",
        },
      },
      {
        "@type": "Offer",
        name: "Корпоративный сайт",
        description:
          "Для компаний, которым важен имидж и доверие клиентов. Многостраничная структура, CMS, SEO-оптимизация, интеграция с CRM.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "50000",
          priceCurrency: "RUB",
        },
      },
      {
        "@type": "Offer",
        name: "Поддержка и доработка сайта",
        description:
          "Для тех, у кого уже есть сайт и нужна помощь. Контроль работоспособности, правки, добавление страниц, консультации.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "8000",
          priceCurrency: "RUB",
          unitCode: "MON",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: "3",
    },
    review: [
      {
        "@type": "Review",
        reviewBody:
          "Илья был всегда на связи. Реализовал все пожелания и учёл все детали, несмотря на сложность проекта. Умение вникнуть в задачу и разобраться в нюансах действительно впечатляет. Рекомендуем всем!",
        author: {
          "@type": "Person",
          name: "Ольга Скрипченко",
          jobTitle: "Сооснователь «Realty Ruler»",
        },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        reviewBody:
          "Рекомендую Илью смело! Вник в задачу, задавал уточняющие вопросы. Показывал промежуточные результаты и объяснял, что и почему делает. Все сроки соблюдались!",
        author: {
          "@type": "Person",
          name: "Александр",
          jobTitle: "Менеджер «Метеор»",
        },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        reviewBody:
          "Сайт нужен был срочно — к началу сезона продаж. Илья сделал за 3 недели (даже быстрее). Удобная корзина, понятная админка. Рекомендую как ответственного разработчика.",
        author: {
          "@type": "Person",
          name: "Татьяна Степанова",
          jobTitle: "Директор «Ice Tomas»",
        },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Мой бюджет ограничен и не дотягивает до указанных цен",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Я подбираю решение под любые задачи. Если стандартный пакет выходит за рамки бюджета — предложу альтернативу: сайт на конструкторе с минимальной настройкой, разделение проекта на этапы или только необходимый функционал. Свяжитесь, обсудим, как уложиться в вашу сумму.",
        },
      },
      {
        "@type": "Question",
        name: "У меня нет готового технического задания, только идея",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Это нормально — большинство клиентов приходят именно с идеей. На первом созвоне я задаю нужные вопросы, помогаю структурировать мысли и сам составляю подробное ТЗ. Вам останется только согласовать.",
        },
      },
      {
        "@type": "Question",
        name: "Боюсь, что получится не то, что ожидал",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Именно поэтому работа строится поэтапно: сначала прототип, потом дизайн — и только после вашего согласования начинается разработка. На каждом шаге вы видите результат и можете вносить правки. Сюрпризов не будет.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит разработка сайта?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Лендинг — от 30 000 ₽ (7 дней), корпоративный сайт — от 50 000 ₽ (12 дней), поддержка и доработка — от 8 000 ₽ в месяц. Точная стоимость зависит от задачи — запишитесь на бесплатную консультацию.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько времени занимает разработка сайта?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Лендинг готов за 7 дней, корпоративный сайт — за 12 дней. Сроки фиксируются в договоре.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
