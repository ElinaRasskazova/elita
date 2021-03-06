// Vendor
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Internals
import {createHocName} from 'utils/hocs';
import Layout from 'components/Layout';

export default Component => {
  class Hoc extends React.PureComponent {
    static displayName = createHocName(Component, 'page');

    static propTypes = {
      children: PropTypes.node,
    };

    static async getInitialProps(ctx) {
      const pageProps = typeof Component.getInitialProps === 'function' ? await Component.getInitialProps(ctx) : {};

      return {...pageProps};
    }

    render() {
      return (
        <Layout>
          <Component {...this.props} />
        </Layout>
      );
    }
  }
  return connect()(Hoc);
};
