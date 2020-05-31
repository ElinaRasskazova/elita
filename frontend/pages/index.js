// Vendor
import React from 'react';
import Iframe from 'react-iframe';
// Internals
import {page} from 'hocs';
import IntroSection from 'sections/index/IntroSection';
import StudySection from 'sections/index/StudySection';
import EmailForm from 'components/EmailForm';

@page
class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <IntroSection />
        <StudySection />
        <EmailForm />
        <Iframe
          url="https://www.youtube.com/embed/ph9YcQ7TeeA"
          width="100%"
          height="515"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </React.Fragment>
    );
  }
}

export default Home;
