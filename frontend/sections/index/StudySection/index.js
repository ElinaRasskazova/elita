// Vendor
import React from 'react';
// Internal
import {pluses} from 'config';
import Typography from 'components/Typography';
import GridRows from 'components/GridRows';
import style from './style.scss';

const StudySection = () => {
  return (
    <section className={style.StudySection}>
      <Typography variant="paragraph" hasMargin>
        Приходи в нашу школу и мы научим тебя ходить по подиуму, позировать, стильно одеваться и грамотно наносить
        макияж.
        <br />
        Мы расскажем как держать тело в хорошей форме, научим секретам модельного бизнеса.
        <br />В нашей школе ты сможешь принять участие в реальных съемках и показах и получишь шанс найти работу в
        модельном бизнесе.
      </Typography>
      <Typography variant="heading2" hasMargin>
        Наши преимущества
      </Typography>
      <GridRows data={pluses} />
    </section>
  );
};

export default StudySection;
