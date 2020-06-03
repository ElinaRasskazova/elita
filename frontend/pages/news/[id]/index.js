// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internals
import NewPage from 'components/NewPage';
import {page} from 'hocs';

@page
class New extends React.PureComponent {
  static async getInitialProps(ctx) {
    const {id} = ctx.query;

    const response = await fetch(`${process.env.API_BASE_URL}/ournews/${id}`);
    const json = await response.json();

    return {newData: json};
  }

  static propTypes = {
    newData: PropTypes.object,
  };

  static defaultProps = {
    newData: {},
  };

  render() {
    return <NewPage newData={this.props.newData}/>;
  }
}

export default New;
