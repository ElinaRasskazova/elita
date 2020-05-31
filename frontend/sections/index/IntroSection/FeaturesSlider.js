// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
// Internals
import style from './style.scss';

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const FeaturesSlider = ({children}) => {
  return (
    <div className={style.FeaturesSlider}>
      <Swiper {...swiperParams}>
        {React.Children.map(children, child => (
          <div>{child}</div>
        ))}
      </Swiper>
    </div>
  );
};

FeaturesSlider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default FeaturesSlider;
