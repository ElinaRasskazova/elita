// Vendor
import React from 'react';
// Internals
import {page} from 'hocs';
import {models} from 'config';
import ModelsCards from 'components/ModelsCards';

@page
class Home extends React.PureComponent {
  render() {
    return <ModelsCards images={models} />;
  }
}

export default Home;
