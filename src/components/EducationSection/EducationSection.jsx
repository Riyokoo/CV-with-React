import React from 'react';
import './EducationSection.css';
import { IoIosSchool } from 'react-icons/io'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';


var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("education");

export default class EducationSection extends React.Component{


    state = {
        education: [],
        current_organization: "",
        current_qualification: "",
        current_description:"",
    }

    constructor(props) {
        super(props);

         firestore_list.onSnapshot(doc => {
            this.setState({
                education:doc.data().education_list
            })
        })
    }

    changeQualification(e) {
        
        var education_copy = this.state.education;

        for (let i = 0; i < education_copy.length; i++){
            
            if (education_copy[i].qualification == this.state.current_qualification) {
                education_copy[i].qualification = e;
            }
 
        }

        this.setState({ education: education_copy });

        firestore_list.set({
            education_list:this.state.education
        })
    }

    changeOrganization(e) {
         var education_copy = this.state.education;

        for (let i = 0; i < education_copy.length; i++){
            
            if (education_copy[i].organization == this.state.current_organization) {
                education_copy[i].organization = e;
            }
 
        }

        this.setState({ education: education_copy });

        firestore_list.set({
            education_list:this.state.education
        })
    }

    changeDescription(e) {
         var education_copy = this.state.education;

        for (let i = 0; i < education_copy.length; i++){
            
            if (education_copy[i].description == this.state.current_description) {
                education_copy[i].description = e;
            }
 
        }

        this.setState({ education: education_copy });

        firestore_list.set({
            education_list:this.state.education
        })
    }

    renderEducation() {
        
        return this.state.education.map((item) => {
            return (
                <div className = "education-item">

                    <text className="period">{item.period}</text>

                        <div className = "education-title">
                        <EditText
                            showButtonsOnHover
                            value={item.qualification}
                            hint = "Qualification"
                            onEditingStart = {(e)=>{this.setState({current_qualification:e})}}
                            onSave = {(e) => {this.changeQualification(e)}}
                            className="education-title-name"></EditText>
                        <EditText
                            onSave={(e) => { this.changeOrganization(e) }}
                            hint = "Organization"
                            showButtonsOnHover
                            onEditingStart = {(e)=>{this.setState({current_organization:e})}}
                            value={item.organization}></EditText>
                        <EditText
                            onSave={(e) => { this.changeDescription(e) }}
                            hint = "description"
                            showButtonsOnHover
                            onEditingStart = {(e)=>{this.setState({current_description:e})}}
                            value={item.description} className="description">
                                {item.description}
                            </EditText>
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