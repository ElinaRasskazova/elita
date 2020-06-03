// Vendor
import React from 'react';
import PropTypes from "prop-types";
// Internal
import FeaturesSlider from './FeaturesSlider';
import FeaturesSlide from './FeaturesSlide';
import style from './style.scss';

const IntroSection = ({newsData}) => {
  const renderSlides = () => {
    return newsData.map((item, key) => {
      return <FeaturesSlide key={key} item={item} />;
    });
  };

  return (
    <section className={style.IntroSection}>
      <FeaturesSlider>{renderSlides()}</FeaturesSlider>
    </section>
  );

};

IntroSection.propTypes = {
  newsData: PropTypes.array.isRequired,
};

export default IntroSection;
