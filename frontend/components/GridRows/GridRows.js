import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import GridFeature from 'components/GridFeature';
import style from './style.scss';

const GridRows = ({className, data}) => {
  const classes = cn({
    [style.container]: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className={style.row}>
        {data.map((item, key) => (
          <GridFeature className={style.column} key={key} feature={item} />
        ))}
      </div>
    </div>
  );
};

GridRows.defaultProps = {
  className: '',
};

GridRows.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default GridRows;
