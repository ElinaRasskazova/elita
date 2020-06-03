// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internals
import Typography from 'components/Typography';
import NewsCard from 'components/NewsCard';
import style from './style.scss';

const NewsList = ({childrens}) => {
  return (
    <div className={style.NewsList}>
      <Typography variant="heading2">Новости</Typography>
      <div className={style.postsWrap}>
        {childrens.map((item, key) => (
          <NewsCard data={item} className={style.card} key={key} />
        ))}
      </div>
    </div>
  );
};

NewsList.propTypes = {
  childrens: PropTypes.array.isRequired,
};

export default NewsList;
