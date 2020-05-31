// Vendor
import React from 'react';
// Internals
import NewPage from 'components/NewPage';
import {page} from 'hocs';

@page
class New extends React.PureComponent {
  render() {
    return <NewPage />;
  }
}

export default New;
