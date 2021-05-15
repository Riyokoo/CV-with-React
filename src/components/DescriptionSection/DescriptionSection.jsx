import React from 'react';
import './DescriptionSection.css';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("short-description");




export default class DescriptionSection extends React.Component {


    
    state = {
        nume:"",
    }

    constructor(props) {
        super(props);

       firestore_list.onSnapshot(doc => {
            this.setState({
                nume:doc.data().nume
            })
        })
    }
    
    


    render() {

      


        return (
            
            <div className = "description-container">
                
                <text className="header-name">{this.state.nume}</text>

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