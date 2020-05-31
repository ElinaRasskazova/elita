// Vendor
import React from 'react';
// Internal
import {slides} from 'config';
import FeaturesSlider from './FeaturesSlider';
import FeaturesSlide from './FeaturesSlide';
import style from './style.scss';

const IntroSection = () => {
  const renderSlides = () => {
    return slides.items.map((item, key) => {
      return <FeaturesSlide key={key} item={item} />;
    });
  };

  return (
    <section className={style.IntroSection}>
      <FeaturesSlider>{renderSlides()}</FeaturesSlider>
    </section>
  );
};

export default IntroSection;
