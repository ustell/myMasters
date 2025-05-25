import { LucideInstagram } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="text-black bg-muted-foreground text-sm py-10 mt-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-black">МАСТЕРА</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Новый заказ</a>
            </li>
            <li>
              <a href="#">Все услуги</a>
            </li>
            <li>
              <a href="#">Все отзывы</a>
            </li>
            <li>
              <a href="#">История заказов</a>
            </li>
            <li>
              <a href="#">Условия использования</a>
            </li>
            <li>
              <a href="#">Каталог ссылок</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Работа в Стамбуле</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Вход для специалистов</a>
            </li>
            <li>
              <a href="#">Партнёрская программа</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">О компании</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Режим работы</h4>
          <ul className="space-y-1">
            <li>Будни: с 6 до 22</li>
            <li>Выходные: с 8 до 22</li>
            <li>
              Служба поддержки <br />
              +7 666 666 66 66
            </li>
          </ul>
          <div className="flex gap-4 mt-2">
            <a href="#">
              <LucideInstagram size={20} />
            </a>
            <a href="#">
              <LucideInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black border-t pt-4">
        <p>© Mastera.com 2023–2023</p>
        <p>
          Информация, опубликованная на данном сайте, предназначена для любой
          аудитории, если иное не указано дополнительно в отношении отдельных
          материалов.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/flags/by.svg" alt="Беларусь" width={20} height={15} />
          <Image src="/flags/kz.svg" alt="Казахстан" width={20} height={15} />
          <Image src="/flags/tr.svg" alt="Турция" width={20} height={15} />
        </div>
      </div>
    </footer>
  );
};
