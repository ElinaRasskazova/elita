// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import {createBackgroundImage} from 'utils/ui';
import Typography from 'components/Typography';
import style from './style.scss';

const ModelsCards = ({images, className}) => {
  const classes = cn({
    [style.InstagramCards]: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <Typography variant="heading2" hasMargin>
        Модели
      </Typography>
      <div className={style.container}>
        {images.slice(0, 9).map((image, i) => (
          <div key={i} className={style.card} style={createBackgroundImage(image)} />
        ))}
      </div>
    </div>
  );
};

ModelsCards.defaultProps = {
  className: '',
};

ModelsCards.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ModelsCards;
