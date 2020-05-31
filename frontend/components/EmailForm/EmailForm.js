import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-final-form';
// import MaskedInput from 'react-text-mask';
// import NumberFormat from 'react-number-format';
import cn from 'classnames';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from 'components/Typography';
import Button from '@material-ui/core/Button';
import style from './style.scss';

const EmailForm = ({className}) => {
  const classes = cn({
    [style.Form]: true,
    [className]: className,
  });

  const onSubmit = values => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{stooge: 'larry', employed: false}}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="heading2" hasMargin>
            Для того, чтобы записаться в школу, заполните Ваши данные
          </Typography>
          <div className={classes}>
            <TextField
              id="standard-basic"
              name="firstName"
              label="Ваше имя"
              variant="outlined"
              className={style.input}
            />
            <TextField
              id="standard-basic"
              name="firstName"
              label="8-xxx-xxx-xx-xx"
              variant="outlined"
              className={style.input}
            />
            <TextField
              id="standard-basic"
              name="firstName"
              label="Ваш возраст"
              variant="outlined"
              className={style.input}
            />
            <Button variant="contained" color="secondary" type="submit">
              Записаться в школу
            </Button>
            <div className={style.checkbox}>
              <FormControlLabel
                control={<Checkbox checked={state.checked} onChange={handleChange} name="checked" />}
                label="Даю согласие на обратку персональных данных согласно политике конфиденциальности"
              />
            </div>
          </div>
        </form>
      )}
    />
  );
};

EmailForm.defaultProps = {
  className: '',
};

EmailForm.propTypes = {
  className: PropTypes.string,
};

export default EmailForm;
