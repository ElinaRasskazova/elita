// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internals
import Link from 'components/Link';
import Typography from 'components/Typography';
import {createBackgroundImage} from 'utils/ui';
import {routes} from 'config';
import style from './style.scss';

const FeaturesSlide = ({item}) => {
  return (
    <div className={style.FeaturesSlide} style={createBackgroundImage(item.image)}>
      <div className={style.imageWrapper} />
      <div className={style.text}>
        <Link className={style.title} href={routes.new} as={`${routes.news}/${item.id}`}>
          {item.title}
        </Link>
        <Typography className={style.description} variant="paragraph">
          {item.description}
        </Typography>
      </div>
    </div>
  );
};

FeaturesSlide.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeaturesSlide;
