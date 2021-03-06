// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from 'components/Typography';
import Link from 'components/Link';
import {createBackgroundImage} from 'utils/ui';
import routes from 'config/routes';
import style from './style.scss';

const NewsCard = ({data, className}) => {
    const classes = cn({
        [style.NewsCard]: true,
        [className]: className,
    });

    return (
        <Card className={classes}>
            <div className={style.imageWrapper}>
                <div className={style.image}
                     style={createBackgroundImage(`${process.env.API_BASE_URL}${data.Photo.url}`)}/>
                <Link className={style.imageLink} href={routes.new} as={`${routes.news}/${data.id}`}/>
            </div>
            <CardContent className={style.cardContent}>
                <Typography variant="heading3">
                    <Link href={routes.new} as={`${routes.news}/${data.id}`} className={style.link}>
                        {data.Title}
                    </Link>
                </Typography>
                <Typography variant="paragraph" className={style.description} hasMargin>
                    {data.Text}
                </Typography>
                <Link className={style.showMore} href={routes.new} as={`${routes.news}/${data.id}`}>
                    Читать далее
                </Link>
            </CardContent>
        </Card>
    );
};

NewsCard.defaultProps = {
    className: '',
};

NewsCard.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
};

export default NewsCard;
