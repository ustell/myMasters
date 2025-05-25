import { ProfiCard } from '@/components/shared/ProfiCard';
import { ProfiList } from '@/components/shared/ProfiList';
import { ReviewCard } from '@/components/shared/reviews/reviews';
import { SearchTip } from '@/components/shared/search-tip';
import { Section } from '@/components/shared/Section';
import { categoriesData } from '@/data/categories';
import Phone from '@/public/mobile.png';
import Image from 'next/image';

export default function Home() {
  const reviews = [
    {
      userName: 'Эмель Айкач',
      avatar: '/users/emel.jpg',
      rating: 4.9,
      reviewsCount: 236,
      opinion: 'Очень хвалят',
      text: 'Всё отлично! Спасибо!',
      category: 'Перевод',
    },
    {
      userName: 'Марина Петрова Сергеевна',
      avatar: '/users/marina.jpg',
      rating: 4.8,
      reviewsCount: 186,
      opinion: 'Хорошо',
      text: 'Профессионал своего дела. Рекомендую',
      category: 'Психология',
    },
    {
      userName: 'Артём Комаров Кириллович',
      avatar: '/users/artem.jpg',
      rating: 4.9,
      reviewsCount: 327,
      opinion: 'Хорошо',
      text: 'Очень ответственный специалист.',
      category: 'Маркетинг',
    },
    {
      userName: 'Елизавета Белова Сергеевна',
      avatar: '/users/eliza.jpg',
      rating: 4.7,
      reviewsCount: 178,
      opinion: 'Хорошо',
      text: 'Спасибо за помощь, всё понятно объясняет',
      category: 'Математика',
    },
    {
      userName: 'Жуков Андрей Романович',
      avatar: '/users/andrey.jpg',
      rating: 4.3,
      reviewsCount: 113,
      opinion: 'Нормально',
      text: 'Хороший репетитор! Замечательно',
      category: 'Музыка',
    },
    {
      userName: 'Ферди Оралоглу Надиевич',
      avatar: '/users/ferdi.jpg',
      rating: 4.8,
      reviewsCount: 187,
      opinion: 'Хорошо',
      text: 'Фотографии получились супер! Спасибо',
      category: 'Фотограф',
    },
    {
      userName: 'Алексей Кудрявцев Алексеевич',
      avatar: '/users/alexey.jpg',
      rating: 4.7,
      reviewsCount: 145,
      opinion: 'Очень хвалят',
      text: 'Работа мастера понравилась. Всё качественно',
      category: 'Электрик',
    },
    {
      userName: 'Яна Бондарева Владимировна',
      avatar: '/users/yana.jpg',
      rating: 4.9,
      reviewsCount: 210,
      opinion: 'Отлично',
      text: 'Спасибо за крутую идею!',
      category: 'Прически',
    },
    {
      userName: 'Малышева Анна Олеговна',
      avatar: '/users/anna.jpg',
      rating: 4.6,
      reviewsCount: 127,
      opinion: 'Нормально',
      text: 'Все прошло хорошо! Спасибо Вам!',
      category: 'Лечение кошек',
    },
  ];

  return (
    <main>
      <section className=" wrapper container flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-[70%] max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Дела исполняются с{' '}
            <span className="uppercase text-primary">мастерами</span>
          </h1>
          <p className="text-muted text-lg">
            12 856 клиентов доверили дела мастерам
          </p>
          <SearchTip data={categoriesData} />
        </div>

        <div className="hidden lg:block lg:w-[30%] self-end">
          <Image src={Phone} alt="Телефон" className="ml-auto" priority />
        </div>
      </section>
      <section className="container flex gap-2 justify-between wrapper">
        {[
          { img: 'image1.jpg', title: 'Card 1' },
          { img: 'image2.jpg', title: 'Card 2' },
          { img: 'image3.jpg', title: 'Card 3' },
          { img: 'image4.jpg', title: 'Card 4' },
          { img: 'image5.jpg', title: 'Card 5' },
        ].map(({ img, title }) => (
          <ProfiCard key={title} img={img} title={title} />
        ))}
      </section>
      <Section
        title="Мастера в Анталии"
        subtitle="В вашем регионе работает 134 специалистов, ещё 2630 готовы помочь дистанционно."
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8"
      >
        {categoriesData.map((category) => (
          <ProfiList
            items={category.fullServices}
            category={category.category}
            key={category.id}
            count={category.count}
            allItem={category.all}
          />
        ))}
      </Section>

      <Section
        title="Отзывы"
        subtitle="733 отзывов оставили клиенты за последние 12 месяцев. Из них 1 598 — положительные."
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3"
      >
        {reviews.map((review, idx) => (
          <ReviewCard user={review.userName} key={idx} {...review} />
        ))}
      </Section>
    </main>
  );
}
