import React from 'react';
import './DescriptionSection.css';

export default class DescriptionSection extends React.Component {

    render() {
        return (
            
            <div className = "description-container">
                
                <text className = "header-name">Vladi</text>

                <div className = "short-summary">
                    <text className = "description">
                        With a few experience in this domain, I am currently studying at
                        Universitatea Politehnica Timisoara at Automation and Applied Informatics,
                         in the 3rd year. I have basic knowledge of C, Python and JavaScript
                         programming languages, knowledge in Object Oriented Programming in C++,
                         Java as well as good understanding in OOP principles. In the present
                          I am studying React JS and React Native, being passionate in web and
                          mobile development. I've not worked for a company yet but I'm willing
                          to learn new things every day, work hard, be open minded and hopefully
                           become the part of a team.
                    </text>
                </div>

                <hr></hr>

            </div>
        )
    }

}