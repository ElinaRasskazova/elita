// Vendor
import React from 'react';
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const NewPage = () => {
  return (
    <div className={style.PostPage}>
      <img
        className={style.postImage}
        src="https://sun9-67.userapi.com/c621515/v621515201/8a6bd/JZ7Q-1pusu0.jpg"
        alt="post image"
      />
      <Typography variant="heading3">Ростовская красавица 2019</Typography>
      <Typography variant="paragraph" hasMargin>
        В преддверии Дня города в Ростове-на-Дону прошел очередной финал конкурса «Форум красоты 2019». Автор проекта
        агентство моделей «Имидж-Элит».
      </Typography>
    </div>
  );
};

export default NewPage;
