// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from 'components/Typography';
import style from './style.scss';

const FeaturesSlide = ({item, className}) => {
  const classes = cn({
    [style.Feature]: true,
    [className]: className,
  });

  return (
    <Card className={classes}>
      <div className={style.header}>{item.title}</div>
      <CardContent className={style.cardContent}>
        {item.features.map((item, key) => (
          <div className={style.feature} key={key}>
            {item}
          </div>
        ))}
        <div className={style.lessons}>
          <Typography variant="paragraph" className={style.lessonsTitle} hasMargin>
            Изучаемые предметы:
          </Typography>
          {item.lessons.map((item, key) => (
            <Typography variant="paragraph" key={key} hasMargin>
              {item}
            </Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

FeaturesSlide.defaultProps = {
  className: '',
};

FeaturesSlide.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default FeaturesSlide;
