import React, {PureComponent} from 'react';
import {Form, Field} from 'react-final-form';
import PropTypes from "prop-types";
import cn from 'classnames';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from 'components/Typography';
import Button from '@material-ui/core/Button';
import style from './style.scss';

class EmailForm extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        className: PropTypes.string,
    };

    state = {
        checked: false,
        isSended: false,
    };

    onSubmit = async values => {
        if (this.state.checked == true) {
            const response = await fetch(`${process.env.API_BASE_URL}/requests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values, 0, 2),
            });

            if (response.statusCode >= 400) {
                alert(response.error);
            } else {
                console.log(response)
            }


        } else {
            alert('Вы не дали согласие на обработку персональных данных')
        }
    };

    handleChange = event => {
        this.setState({...this.state, [event.target.name]: event.target.checked});
    };

    render() {
        const classes = cn({
            [style.Form]: true,
            [this.props.className]: this.props.className,
        });

        if (this.state.isSended) {
            return <Typography variant="paragraph">Ваша заявка будет обработана в ближайшее время</Typography>
        }
        return (
            <Form
                onSubmit={this.onSubmit}
                initialValues={{}}
                render={({handleSubmit, reset, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Typography variant="heading2" hasMargin>
                            Для того, чтобы записаться в школу, заполните Ваши данные
                        </Typography>
                        <div className={classes}>
                            <Field name="Name">
                                {({input}) => (
                                    <TextField
                                        id="standard-basic"
                                        name="firstName"
                                        label="Ваше имя"
                                        variant="outlined"
                                        className={style.input}
                                        required
                                        {...input}
                                    />
                                )}
                            </Field>
                            <Field name="Phone">
                                {({input}) => (
                                    <TextField
                                        id="standard-basic"
                                        name="firstName"
                                        label="8-xxx-xxx-xx-xx"
                                        variant="outlined"
                                        className={style.input}
                                        required
                                        {...input}
                                    />
                                )}
                            </Field>
                            <Field name="Question">
                                {({input}) => (
                                    <TextField
                                        id="standard-basic"
                                        name="firstName"
                                        label="Ваш вопрос"
                                        variant="outlined"
                                        className={style.input}
                                        required
                                        {...input}
                                    />
                                )}
                            </Field>
                            <Button variant="contained" color="secondary" type="submit">
                                Записаться в школу
                            </Button>
                            <div className={style.checkbox}>
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.checked} onChange={this.handleChange}
                                                       name="checked"/>}
                                    label="Даю согласие на обратку персональных данных согласно политике конфиденциальности"
                                />
                            </div>
                        </div>
                    </form>
                )}
            />
        );
    }

};

export default EmailForm;
