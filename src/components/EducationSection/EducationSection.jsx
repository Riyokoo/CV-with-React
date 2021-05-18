import React from 'react';
import './EducationSection.css';
import { IoIosSchool } from 'react-icons/io'
import fb from '../../Fire.js';
import firebase from 'firebase';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';


var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("education");

export default class EducationSection extends React.Component{


    state = {
        education: [],
        current_organization: "",
        current_qualification: "",
        current_description: "",
        current_start_period: "",
        current_end_period: "",
        current_description:"",
        toggleVisible:false,
        toggleModal:false,
        organization_to_delete: "",
        qualification_to_delete: "",
        description_to_delete: "",
        start_period_to_delete: "",
        end_period_to_delete: "",
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

    changeStartPeriod(e) {
        
        
        var education_copy = this.state.education;

        for (let i = 0; i < education_copy.length; i++){
            if (education_copy[i].start_date == this.state.current_start_period) {
                education_copy[i].start_date = e;
            }
        }

        this.setState({ education: education_copy });

        firestore_list.set({
            education_list:this.state.education
        })

    }


    changeEndPeriod(e) {
        
        var education_copy = this.state.education;

        for (let i = 0; i < education_copy.length; i++){
            if (education_copy[i].end_date == this.state.current_end_period) {
                education_copy[i].end_date = e;
            }
        }

        this.setState({ education: education_copy });

        firestore_list.set({
            education_list:this.state.education
        })

        

    }

    AddEducation() {
        
        if (this.state.current_qualification == ""
            || this.state.current_organization == ""
            || this.state.current_start_period == ""
            || this.state.current_end_period == ""
            || this.state.current_description == ""
        ) {
            
        }
        else {
            firestore_list.update({
                education_list: firebase.firestore.FieldValue.arrayUnion({
                    qualification: this.state.current_qualification,
                    organization:this.state.current_organization,
                    description: this.state.current_description,
                    start_date: this.state.current_start_period,
                    end_date:this.state.current_end_period,
                    
                })
            })

            this.setState({toggleVisible:!this.state.toggleVisible})
        }

    }



    renderEducation() {
        
        return this.state.education.map((item) => {
            return (
                <div className = "education-item">

                        <div className = "year-period">
                        
                        
                    
                        <EditText
                            onSave = {(e) => this.changeStartPeriod(e)}
                            value = {item.start_date}
                            onEditingStart = {(e) => this.setState({current_start_period:e})}
                            showButtonsOnHover
                            type = "number"
                            hint="Start period"></EditText>
                        
                    <text className = "between">-</text>

                   <EditText
                            onSave = {(e) => this.changeEndPeriod(e)}
                            value = {item.end_date}
                            onEditingStart = {(e) => this.setState({current_end_period:e})}
                            showButtonsOnHover
                            type = "number"
                            hint="End period"></EditText>
                        
                    
                    </div>

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
                                
                            </EditText>
                        </div>

                    <BsFillTrashFill

                        onClick={() => {
                            
                            this.setState({ toggleModal: !this.state.toggleModal });
                            this.setState({ qualification_to_delete: item.qualification });
                            this.setState({ organization_to_delete: item.organization });
                            this.setState({ description_to_delete: item.description });
                            this.setState({ start_period_to_delete: item.start_date });
                            this.setState({ end_period_to_delete: item.end_date });
                        }}
                        
                    className = "trash-icon-education"
                    ></BsFillTrashFill>

                    </div>
            )
        })
    }

    removeEducation() {
        
        firestore_list.update({
            education_list: firebase.firestore.FieldValue.arrayRemove({
                qualification: this.state.qualification_to_delete,
                organization: this.state.organization_to_delete,
                start_date: this.state.start_period_to_delete,
                end_date:this.state.end_period_to_delete,
                description: this.state.description_to_delete,
                
            })
        })
    }


    render() {
        return (
            
            <div className="education-experience-container">
                            
                     <IoIosSchool className = "education-icon"></IoIosSchool>
                    <text className = "work-header">EDUCATION AND QUALIFICATIONS</text>
                <AiOutlinePlus
                    onClick = {() =>this.setState({toggleVisible:!this.state.toggleVisible})}
                    className = "add-education-icon"
                ></AiOutlinePlus>
                
                <div style = {{display: this.state.toggleVisible ? "block" : "none"}}>
                    <form className = "add-form">
                        <input type="input"
                            onChange={(e) => this.setState({ current_qualification:e.target.value })}
                            placeholder="Qualification aquired"
                            className="add-work-experience">
                        </input>
                        <input type="input"
                            onChange={(e) => this.setState({ current_organization: e.target.value })}
                            placeholder="Organization name"
                            className="add-work-experience">
                        </input>
                         <input 
                            onChange={(e) => this.setState({ current_description:e.target.value })}
                            placeholder="Short description"
                            className="add-work-experience">
                        </input>
                         <input type="number"
                            onChange={(e) => this.setState({ current_start_period:e.target.value })}
                            placeholder="Start date"
                            className="add-work-experience">
                        </input>
                        <input type="number"
                            onChange={(e) => this.setState({ current_end_period:e.target.value })}
                            placeholder="End date"
                            className="add-work-experience">
                        </input>
                       
                        <button className="add-button-interest" type="reset"
                            onClick={() => { this.AddEducation() }}>Add</button>
                    </form>
                </div>      

                <div className = "educations-list">
                    {this.renderEducation()}
                </div>

                 <div style = {{display:this.state.toggleModal ? "block": "none"}} className="modal">
                    <div className = "modal-content">
                        <div className = "message">
                            <text>Are you sure u want to delete this item ?</text>
                            <div className = "buttons" >
                                <button
                                    onClick={() => { this.removeEducation(); this.setState({ toggleModal: !this.state.toggleModal }) }}
                                    className="yes-button">YES</button>
                                <button onClick = {() => this.setState({toggleModal:!this.state.toggleModal})} className = "no-button">NO</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}