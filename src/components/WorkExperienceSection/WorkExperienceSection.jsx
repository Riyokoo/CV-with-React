import React from 'react';
import './WorkExperienceSection.css';
import { MdWork } from 'react-icons/md';
import PerfectSccrollbar from 'react-perfect-scrollbar';

export default class WorkExperienceSection extends React.Component {

    render() {
        return (
            
            <div className="work-experience-container">
                            
                     <MdWork className = "work-icon"></MdWork>
                    <text className = "work-header">WORK EXPERIENCE</text>
        
                <div className = "jobs-list">
                    
                    <div className = "job-item">

                        <text className = "period">2015-2018</text>

                        <div className = "job-title">
                            <text className = "job-title-name">Junior Web Developer</text>
                            <text>Netflix</text>
                            <text className = "description">Description about the job that I have worked on recently a dawdawdawdawdawawdwa</text>
                        </div>

                    </div>

                    <div className = "job-item">

                        <text className = "period">2015-present</text>

                        <div className = "job-title">
                            <text className = "job-title-name">Data scientist</text>
                            <text>Visma</text>
                            <text className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </text>
                        </div>

                    </div>

                    <div className = "job-item">

                        <text className = "period">2015-2018</text>

                        <div className = "job-title">
                            <text className = "job-title-name">Data scientist</text>
                            <text>Visma</text>
                            <text className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </text>
                        </div>

                    </div>

                   

                    
                    
               </div>


            </div>
        )
    }

}