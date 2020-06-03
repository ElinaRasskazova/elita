// Vendor
import React from 'react';
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
// Internals
import {page} from 'hocs';
import NewsList from 'components/NewsList';

@page
class News extends React.PureComponent {
    static propTypes = {
        newsData: PropTypes.array,
    };

    static async getInitialProps() {
        const response = await fetch(`${process.env.API_BASE_URL}/ournews`);
        const json = await response.json();

        return {newsData: json};
    }

    render() {
    return <NewsList childrens={this.props.newsData} />;
  }
}

export default News;
