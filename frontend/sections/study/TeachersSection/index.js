// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internal
import Typography from 'components/Typography';
import GridRows from 'components/GridRows';
import style from './style.scss';

const TeachersSection = ({teachers}) => {
    const teachersFormat = values => {
        return values.map(item => {
                return ({
                    image: `${process.env.API_BASE_URL}${item.Photo.url}`,
                    text: item.Text,
                })
            }
        );
    };

    return (
        <section className={style.TeachersSection}>
            <Typography variant="heading2" hasMargin>
                Наши преподаватели
            </Typography>
            <GridRows data={teachersFormat(teachers)}/>
        </section>
    );
};

TeachersSection.propTypes = {
    teachers: PropTypes.array.isRequired,
};

export default TeachersSection;
