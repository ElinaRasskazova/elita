// Vendor
import React from 'react';
// Internals
import {page} from 'hocs';
import TeachersSection from 'sections/study/TeachersSection';
import WaysSection from 'sections/study/WaysSection';
import LessonsSection from 'sections/study/LessonsSection';
import EmailForm from 'components/EmailForm';
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";

@page
class Home extends React.PureComponent {
    static propTypes = {
        teachersData: PropTypes.array,
    };

    static async getInitialProps() {
        const response = await fetch(`${process.env.API_BASE_URL}/teachers`);
        const json = await response.json();

        return {teachersData: json};
    }

    render() {
        return (
            <React.Fragment>
                <TeachersSection teachers={this.props.teachersData}/>
                <WaysSection/>
                <LessonsSection/>
                <EmailForm/>
            </React.Fragment>
        );
    }
}

export default Home;
