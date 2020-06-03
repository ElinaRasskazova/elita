// Vendor
import React from 'react';
// Internals
import {page} from 'hocs';
import {slides} from 'config';
import NewsList from 'components/NewsList';

@page
class News extends React.PureComponent {
    render() {
    return <NewsList childrens={slides} />;
  }
}

export default News;
