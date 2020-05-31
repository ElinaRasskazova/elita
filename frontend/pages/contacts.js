// Vendor
import React from 'react';
// Internals
import {page} from 'hocs';
import ContactsPage from 'components/ContactsPage';

@page
class Home extends React.PureComponent {
  render() {
    return <ContactsPage />;
  }
}

export default Home;
