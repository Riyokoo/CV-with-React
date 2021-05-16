import React from 'react';
import './WorkExperienceSection.css';
import { MdWork } from 'react-icons/md';
import PerfectSccrollbar from 'react-perfect-scrollbar';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("work-experience");

export default class WorkExperienceSection extends React.Component {


    state = {
        work_experience:[],
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                work_experience:doc.data().work_experience_list
            })
        })
    }

    rendeJobs() {
    
        return this.state.work_experience.map((item) => {
            return (
                <div className = "job-item">

                    <text className="period">{item.period}</text>

                        <div className = "job-title">
                        <text className="job-title-name">{item.title}</text>
                        <text>{item.company}</text>
                            <text className = "description">Description about the job that I have worked on recently a dawdawdawdawdawawdwa</text>
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