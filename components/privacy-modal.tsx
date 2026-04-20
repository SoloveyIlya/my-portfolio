"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

export function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      className="w-full max-w-2xl rounded-3xl p-0 shadow-2xl m-auto backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:flex-col"
    >
      <div className="flex flex-col gap-0 max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 shrink-0">
          <h2 className="text-xl font-bold text-[#1E2A3A]">
            Политика обработки персональных данных
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-zinc-400 hover:text-zinc-700 transition-colors ml-4 shrink-0"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 pb-8 text-sm text-zinc-600 leading-relaxed flex flex-col gap-5">
          <p className="text-zinc-400 text-xs">Дата вступления в силу: 1 января 2025 г.</p>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">1. Общие положения</h3>
            <p>Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок сбора, хранения, использования и защиты персональных данных пользователей сайта, расположенного по адресу в сети Интернет (далее — «Сайт»), оператором которого является индивидуальный предприниматель Илья Соловьёв (далее — «Оператор»).</p>
            <p>Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки персональных данных.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">2. Какие данные мы собираем</h3>
            <p>При использовании форм обратной связи на Сайте Оператор может собирать следующие персональные данные:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона</li>
              <li>Контакт в мессенджере</li>
              <li>Содержание сообщений, направленных через форму</li>
            </ul>
            <p>Также автоматически могут фиксироваться технические данные: IP-адрес, тип браузера, страницы посещений — исключительно в целях улучшения работы Сайта.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">3. Цели обработки данных</h3>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Связь с пользователем по его обращению или заявке</li>
              <li>Предоставление консультаций и информации об услугах</li>
              <li>Составление коммерческих предложений</li>
              <li>Исполнение договорных обязательств</li>
              <li>Улучшение качества обслуживания</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">4. Правовые основания обработки</h3>
            <p>Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, выражаемого путём заполнения и отправки соответствующей формы на Сайте, а также в целях исполнения договора, стороной которого является субъект персональных данных.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">5. Хранение и защита данных</h3>
            <p>Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий.</p>
            <p>Персональные данные хранятся не дольше, чем этого требуют цели их обработки, либо в течение срока, предусмотренного законодательством.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">6. Передача данных третьим лицам</h3>
            <p>Оператор не передаёт персональные данные пользователей третьим лицам, за исключением случаев, когда это необходимо для исполнения договора (например, платёжные сервисы, хостинг-провайдеры), а также в случаях, предусмотренных действующим законодательством.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">7. Права субъекта персональных данных</h3>
            <p>Пользователь вправе:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Получить информацию об обрабатываемых персональных данных</li>
              <li>Потребовать уточнение, блокирование или уничтожение данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обратиться с жалобой в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>
            <p>Для реализации своих прав направьте запрос на адрес: <span className="text-[#0066CC]">ilyasolovey7@gmail.com</span></p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">8. Файлы cookie</h3>
            <p>Сайт может использовать файлы cookie для улучшения пользовательского опыта. Пользователь вправе отключить использование cookie в настройках браузера, однако это может повлиять на функциональность Сайта.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">9. Изменения Политики</h3>
            <p>Оператор оставляет за собой право вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента её размещения на Сайте. Продолжение использования Сайта после публикации изменений означает согласие пользователя с обновлённой Политикой.</p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-[#1E2A3A]">10. Контактные данные</h3>
            <p>По вопросам, связанным с настоящей Политикой, обращайтесь:</p>
            <ul className="list-none flex flex-col gap-1">
              <li>Email: <span className="text-[#0066CC]">ilyasolovey7@gmail.com</span></li>
              <li>Телефон: +375 (29) 205-36-05</li>
            </ul>
          </section>
        </div>
      </div>
    </dialog>
  );
}
