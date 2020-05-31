// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// Internals
import AppBar from '@material-ui/core/AppBar';
import Typography from 'components/Typography';
import style from './style.scss';

class Footer extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <AppBar className={style.footer} position="static" color="transparent">
        <Typography variant="paragraph">Copyright © 1990-2020 Emage-Elite</Typography>
      </AppBar>
    );
  }
}

export default Footer;
