// Vendor
import React from 'react';
// Internal
import {ways} from 'config';
import Typography from 'components/Typography';
import Feature from './Feature';
import style from './style.scss';

const WaysSection = () => {
  return (
    <section className={style.WaysSection}>
      <Typography variant="heading2" hasMargin>
        Способы обучения
      </Typography>
      <div className={style.row}>
        {ways.items.map((item, key) => (
          <Feature item={item} key={key} className={style.col} />
        ))}
      </div>
    </section>
  );
};

export default WaysSection;
