// Vendor
import React from 'react';
import Iframe from 'react-iframe';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
// Internals
import {page} from 'hocs';
import IntroSection from 'sections/index/IntroSection';
import StudySection from 'sections/index/StudySection';
import EmailForm from 'components/EmailForm';

@page
class Home extends React.PureComponent {
    static propTypes = {
        newsData: PropTypes.array,
    };

    static async getInitialProps() {
        const response = await fetch(`${process.env.API_BASE_URL}/ournews`);
        const json = await response.json();

        return {newsData: json};
    }

    render() {
        return (
            <React.Fragment>
                <IntroSection newsData={this.props.newsData}/>
                <StudySection/>
                <EmailForm/>
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
