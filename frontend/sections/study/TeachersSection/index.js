// Vendor
import React from 'react';
// Internal
import Typography from 'components/Typography';
import GridRows from 'components/GridRows';
import style from './style.scss';

const TeachersSection = ({teachers}) => {
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
