import React from 'react'
import './ProjectsSection.css';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';
import {AiTwotoneFolder} from 'react-icons/ai'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("projects");

export default class ProjectsSection extends React.Component{


    state = {
        projects:[],
    }

    constructor(props) {
        super(props);

         firestore_list.onSnapshot(doc => {
            this.setState({
                projects:doc.data().projects_list
            })
        })
    }

    renderProjects() {
        
        return this.state.projects.map((item) => {

            return (
                 <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                        {item.project_item}
                        </text>
                    </div>
            )
        })
    }


    render() {
        return (
            <div className="skills-container">
                            
                     <AiTwotoneFolder className = "projects-icon"></AiTwotoneFolder>
                    <text className = "work-header">PROJECTS</text>
        
                
                
                <div className = "skills-list">
                    {this.renderProjects()}
                </div>


            </div>
        )
    }

}