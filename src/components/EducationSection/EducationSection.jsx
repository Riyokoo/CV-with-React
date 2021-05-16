import React from 'react';
import './EducationSection.css';
import { IoIosSchool } from 'react-icons/io'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("education");

export default class EducationSection extends React.Component{


    state = {
        education:[],
    }

    constructor(props) {
        super(props);

         firestore_list.onSnapshot(doc => {
            this.setState({
                education:doc.data().education_list
            })
        })
    }

    renderEducation() {
        
        return this.state.education.map((item) => {
            return (
                <div className = "education-item">

                    <text className="period">{item.period}</text>

                        <div className = "education-title">
                        <text className="education-title-name">{item.qualification}</text>
                        <text>{item.organization}</text>
                            <text className="description">
                                {item.description}
                            </text>
                        </div>

                    </div>
            )
        })
    }


    render() {
        return (
            
            <div className="education-experience-container">
                            
                     <IoIosSchool className = "education-icon"></IoIosSchool>
                    <text className = "work-header">EDUCATION AND QUALIFICATIONS</text>
        
               

                <div className = "educations-list">
                    {this.renderEducation()}
                </div>


            </div>
        )
    }
}