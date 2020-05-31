// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// Internals
import {AppBar, Toolbar} from '@material-ui/core';
import Link from 'components/Link';
import {createBackgroundImage} from 'utils/ui';
import {routes, nav} from 'config';
import logoImg from 'assets/img/logo.jpg';
import style from './style.scss';

class Header extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  renderItems() {
    return nav.items.map(({children, href}, key) => {
      return (
        <Link href={href} className={style.navItem} activeClassName={style.navItemActive} key={key}>
          {children}
        </Link>
      );
    });
  }

  render() {
    return (
      <AppBar position="static" color="transparent">
        <Toolbar className={style.header}>
          <div className={style.logo}>
            <Link className={style.logoLink} href={routes.home}>
              {' '}
            </Link>
            <div className={style.logoImage} style={createBackgroundImage(logoImg)} />
          </div>
          <div className={style.nav}>{this.renderItems()}</div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
