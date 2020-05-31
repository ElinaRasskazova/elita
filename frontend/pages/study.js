// Vendor
import React from 'react';
// Internals
import {page} from 'hocs';
import TeachersSection from 'sections/study/TeachersSection';
import WaysSection from 'sections/study/WaysSection';
import LessonsSection from 'sections/study/LessonsSection';
import EmailForm from 'components/EmailForm';

@page
class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <TeachersSection />
        <WaysSection />
        <LessonsSection />
        <EmailForm />
      </React.Fragment>
    );
  }
}

export default Home;
