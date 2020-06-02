import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'components/Typography';

const GridFeature = ({className, feature}) => {
  return (
    <div className={className}>
      <img src={feature.image} alt="feature" style={{borderRadius: '100%'}} />
      <Typography variant="paragraph">{feature.text}</Typography>
    </div>
  );
};

GridFeature.defaultProps = {
  className: '',
};

GridFeature.propTypes = {
  className: PropTypes.string,
  feature: PropTypes.object.isRequired,
};

export default GridFeature;
