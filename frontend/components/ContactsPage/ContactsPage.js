// Vendor
import React from 'react';
import Iframe from 'react-iframe';
// Internals
import Link from 'components/Link';
import Typography from 'components/Typography';

const ContactsPage = () => {
  return (
    <div>
      <Typography variant="heading1" hasMargin>
        Контакты
      </Typography>
      <Typography variant="heading3" hasMargin>
        Степура Михаил Юрьевич
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Генеральный директор НОУ «Имидж-Центр», директор агентства моделей «Имидж-Элит», вице-президент Международного
        Альянса Модельных Агентств М.А.М.А., официальный представитель конкурса «Мисс Россия» в Южном федеральном округе
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Тел/факс:
        <Link href="tel:89633033050"> 8(963)303-30-50</Link>,<Link href="tel:79282291445"> +7(928)229-14-45</Link>
      </Typography>
      <Typography variant="paragraph" hasMargin>
        E-mail:<Link href="mailto:imagerostov@mail.ru"> imagerostov@mail.ru</Link>
      </Typography>
      <Typography variant="heading3" hasMargin>
        Степура Елена Николаевна
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Почетный работник культуры РФ, директор центра красоты и светского воспитания «Имидж», главный редактор
        Российского иллюстрированного журнала «Красота без границ» и детского глянцевого приложения «Красота детства»
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Тел/факс:
        <Link href="tel:89633033050"> 8(963)303-30-50</Link>
      </Typography>
      <Typography variant="paragraph" hasMargin>
        E-mail:<Link href="mailto:imageart@mail.ru"> imageart@mail.ru</Link>
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Vk <Link href="https://vk.com/image_elite_rostov"> https://vk.com/image_elite_rostov</Link>
      </Typography>
      <Typography variant="heading3" hasMargin>
        Татаринцева Ольга Юрьевна
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Завуч центра светского воспитания «Имидж»
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Тел/факс:
        <Link href="tel:89633033050"> 8(963)303-30-50</Link>,<Link href="tel:79282291445"> +7(928)229-14-45</Link>
      </Typography>
      <Typography variant="paragraph" hasMargin>
        E-mail:<Link href="mailto:image-elite@yandex.ru"> image-elite@yandex.ru</Link>
      </Typography>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.438486384579!2d39.73689711584961!3d47.22756827916134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9168d1bf1fb%3A0xfb8c2463459a7a89!2z0JjQvNC40LTQti3QrdC70LjRgiwg0LzQvtC00LXQu9GM0L3QvtC1INCw0LPQtdC90YLRgdGC0LLQviDQndCe0KMgItCY0LzQuNC00LYt0YbQtdC90YLRgCI!5e0!3m2!1sru!2sru!4v1576612706176!5m2!1sru!2sru"
        width="930"
        height="450"
        frameBorder="0"
        style="border:0;"
        allowFullScreen=""
      />
    </div>
  );
};

export default ContactsPage;
