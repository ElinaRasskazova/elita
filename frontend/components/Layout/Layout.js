// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from '@material-ui/core/container';
import style from './style.scss';

class Layout extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const {className, children} = this.props;

    return (
      <div className={cn(style.Layout, className)}>
        <Header />
        <main className={style.main}>
          <Container>{children}</Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
