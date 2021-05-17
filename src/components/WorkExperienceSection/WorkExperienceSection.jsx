import React from 'react';
import './WorkExperienceSection.css';
import { MdWork } from 'react-icons/md';
import PerfectSccrollbar from 'react-perfect-scrollbar';
import fb from '../../Fire.js';
import firebase from 'firebase';
import firestore from '@firebase/firestore';
import "react-datepicker/dist/react-datepicker.css";
import EditText from 'react-editext';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';


var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("work-experience");

     

export default class WorkExperienceSection extends React.Component {


    state = {
        work_experience: [],
        current_date:"",
        current_title: "",
        current_company: "",
        current_description: "",
        current_start_period: "",
        current_end_period:"",
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 'present'],
        toggleVisible: false,
        current_job_title: "",
        current_company:"",
        toggleModal:false,
        title_to_delete:"",
        company_to_delete: "",
        start_date_to_delete: "",
        end_date_to_delete:"",
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

    changeStartPeriod(e) {
        
        
        var work_experience_copy = this.state.work_experience;

        for (let i = 0; i < work_experience_copy.length; i++){
            if (work_experience_copy[i].start_period == this.state.current_start_period) {
                work_experience_copy[i].start_period = e;
            }
        }

        this.setState({ work_experience: work_experience_copy });

        firestore_list.set({
            work_experience_list:this.state.work_experience
        })

    }

    changeEndPeriod(e) {
        
        
        var work_experience_copy = this.state.work_experience;

        for (let i = 0; i < work_experience_copy.length; i++){
            if (work_experience_copy[i].end_period == this.state.current_end_period) {
                work_experience_copy[i].end_period = e;
            }
        }

        this.setState({ work_experience: work_experience_copy });

        firestore_list.set({
            work_experience_list:this.state.work_experience
        })
    
    

    }

    renderJobs() {
    
        return this.state.work_experience.map((item) => {
            return (
                <div className = "job-item">

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
                    <div style={{ display: 'flex', flexDirection:"column"}}>
                        
                        
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
                    <BsFillTrashFill
                        onClick={() => {

                            this.setState({ toggleModal: !this.state.toggleModal });
                            this.setState({ company_to_delete: item.company });
                            this.setState({ title_to_delete: item.title });
                            this.setState({ start_date_to_delete: item.start_date });
                            this.setState({ end_date_to_delete: item.end_date });
                            
                        }}
                        className="trash-icon-work-experience"></BsFillTrashFill>

                    </div>
            )
        })
        
    }

    AddWorkExperience() {
        
        if (this.state.current_job_title == "" || this.state.current_company == "" || this.state.current_start_period == "" || this.state.current_end_period == "") {
            

        }
        else {
            firestore_list.update({
                work_experience_list: firebase.firestore.FieldValue.arrayUnion({
                    company: this.state.current_company,
                    title: this.state.current_job_title,
                    start_date: this.state.current_start_period,
                    end_date:this.state.current_end_period,
                })
            })

            this.setState({ toggleVisible: !this.state.toggleVisible });
        }
    }

    removeWorkExperience() {
        
        firestore_list.update({
            work_experience_list: firebase.firestore.FieldValue.arrayRemove({
                company: this.state.company_to_delete,
                title: this.state.title_to_delete,
                start_date: this.state.start_date_to_delete,
                end_date:this.state.end_date_to_delete,
            })
        })
    }

    render() {

       

        const { SingleValue } = this.state;
        return (
            
            <div className="work-experience-container">
                            
                     <MdWork className = "work-icon"></MdWork>
                    <text className = "work-header" onClick = {() => console.log(this.state.work_experience)}>WORK EXPERIENCE</text>
                <AiOutlinePlus className="add-work-experience-icon"
                onClick = {() => this.setState({toggleVisible:!this.state.toggleVisible})}
                ></AiOutlinePlus>
               
                 <div style = {{display: this.state.toggleVisible ? "block" : "none"}}>
                    <form className = "add-form">
                        <input type="input"
                            onChange={(e) => this.setState({ current_job_title:e.target.value })}
                            placeholder="Job title"
                            className="add-work-experience">
                        </input>
                        <input type="input"
                            onChange={(e) => this.setState({ current_company: e.target.value })}
                            placeholder="Company"
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
                            onClick={() => { this.AddWorkExperience() }}>Add</button>
                    </form>
                </div>      

                <div className = "jobs-list">
                    {this.renderJobs()}
                </div>

                <div style = {{display:this.state.toggleModal ? "block": "none"}} className="modal">
                    <div className = "modal-content">
                        <div className = "message">
                            <text>Are you sure u want to delete this item ?</text>
                            <div className = "buttons" >
                                <button
                                    onClick={() => { this.removeWorkExperience(); this.setState({ toggleModal: !this.state.toggleModal }) }}
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