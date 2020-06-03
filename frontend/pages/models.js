// Vendor
import React from 'react';
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
// Internals
import {page} from 'hocs';
import ModelsCards from 'components/ModelsCards';

@page
class Home extends React.PureComponent {

  static propTypes = {
    modelsData: PropTypes.array,
  };

  static async getInitialProps() {
    const response = await fetch(`${process.env.API_BASE_URL}/models`);
    const json = await response.json();

    return {modelsData: json};
  }

  render() {
    return <ModelsCards images={this.props.modelsData} />;
  }
}

export default Home;
