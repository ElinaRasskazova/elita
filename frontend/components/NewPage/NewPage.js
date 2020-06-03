// Vendor
import React from 'react';
import PropTypes from "prop-types";
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const NewPage = ({newData}) => {
    const image = `${process.env.API_BASE_URL}${newData.Photo.url}`;
    return (
        <div className={style.PostPage}>
            <img
                className={style.postImage}
                src={image}
                alt="post image"
            />
            <Typography variant="heading3">{newData.Title}</Typography>
            <Typography variant="paragraph" hasMargin>{newData.Text}</Typography>
        </div>
    );
};

NewPage.propTypes = {
    newData: PropTypes.object.isRequired,
};

export default NewPage;
