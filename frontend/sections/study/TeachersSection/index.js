// Vendor
import React from 'react';
// Internal
import {teachers} from 'config';
import Typography from 'components/Typography';
import GridRows from 'components/GridRows';
import style from './style.scss';

const TeachersSection = () => {
  return (
    <section className={style.TeachersSection}>
      <Typography variant="heading2" hasMargin>
        Наши преподаватели
      </Typography>
      <GridRows data={teachers} />
    </section>
  );
};

export default TeachersSection;
