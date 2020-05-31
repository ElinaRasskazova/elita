// Vendor
import React from 'react';
// Internal
import {complex} from 'config';
import Typography from 'components/Typography';
import GridRows from 'components/GridRows';

const LessonsSection = () => {
  return (
    <section>
      <Typography variant="heading2" hasMargin>
        КОМПЛЕКСНЫЕ ЗАНЯТИЯ ПО ПРЕДМЕТАМ
      </Typography>
      <GridRows data={complex} />
    </section>
  );
};

export default LessonsSection;
