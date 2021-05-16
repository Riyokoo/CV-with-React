import React from 'react';
import './WorkExperienceSection.css';
import { MdWork } from 'react-icons/md';
import PerfectSccrollbar from 'react-perfect-scrollbar';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditText from 'react-editext';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("work-experience");

export default class WorkExperienceSection extends React.Component {


    state = {
        work_experience: [],
        date: new Date(),
        current_title: "",
        current_company: "",
        current_description:"",
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                work_experience:doc.data().work_experience_list
            })
        })
    }

    changeTitle(e) {
        
        var work_experience_copy = this.state.work_experience;

        for (let i = 0; i < work_experience_copy.length; i++){
            if (work_experience_copy[i].title == this.state.current_title) {
                work_experience_copy[i].title = e;
            }
        }

        this.setState({ work_experience: work_experience_copy });

        firestore_list.set({
            work_experience_list:this.state.work_experience
        })
    }

    changeCompany(e) {
        
        var work_experience_copy = this.state.work_experience;

        for (let i = 0; i < work_experience_copy.length; i++){
            if (work_experience_copy[i].company == this.state.current_company) {
                work_experience_copy[i].company = e;
            }
        }

        this.setState({ work_experience: work_experience_copy });

        firestore_list.set({
            work_experience_list:this.state.work_experience
        })
    }

    rendeJobs() {
    
        return this.state.work_experience.map((item) => {
            return (
                <div className = "job-item">

                    
                    <div style={{ display: 'flex', flexDirection:"column"}}>
                        <DatePicker selected = {this.state.date} onChange = {(e) => this.setState({date:e})} className="date-picker"></DatePicker>
                    <DatePicker className = "date-picker"></DatePicker>
                    </div>
                        <div className = "job-title">
                        <EditText
                            hint = "Job title"
                            onEditingStart = {(e) => this.setState({current_title:e})}
                            showButtonsOnHover
                            onSave = {(e) => this.changeTitle(e)}
                            value = {item.title}
                            className="job-title-name">
                        </EditText>
                        <EditText
                            hint = "Company that u worked for"
                            onEditingStart = {(e) => this.setState({current_company:e}) }
                            showButtonsOnHover
                            onSave = {(e) => this.changeCompany(e)}
                            value = {item.company}
                        ></EditText>
                        </div>

                    </div>
            )
        })
        
    }

    render() {
        return (
            
            <div className="work-experience-container">
                            
                     <MdWork className = "work-icon"></MdWork>
                    <text className = "work-header" onClick = {() => console.log(this.state.work_experience)}>WORK EXPERIENCE</text>
        
               

                <div className = "jobs-list">
                    {this.rendeJobs()}
                </div>


            </div>
        )
    }

}