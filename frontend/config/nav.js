import routes from './routes';

export default {
  items: [
    {
      children: 'О нас',
      href: routes.home,
    },
    {
      children: 'Новости',
      href: routes.news,
    },
    {
      children: 'Обучение',
      href: routes.study,
    },
    {
      children: 'Модели',
      href: routes.models,
    },
    {
      children: 'Контакты',
      href: routes.contacts,
    },
  ],
};
