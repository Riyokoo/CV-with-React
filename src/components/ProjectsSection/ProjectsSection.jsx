import React from 'react'
import './ProjectsSection.css';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';
import {AiTwotoneFolder} from 'react-icons/ai'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';
import styled, { css } from 'styled-components'



var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("projects");

    const StyledEditText = styled(EditText)`

div[editext="view-container"], div[editext="edit-container"] {
    color: #000;
    width: 700px;
  }
`

export default class ProjectsSection extends React.Component{


    state = {
        projects: [],
        current_project:"",
    }

    constructor(props) {
        super(props);

         firestore_list.onSnapshot(doc => {
            this.setState({
                projects:doc.data().projects_list
            })
        })
    }

    ChangeProject(e) {
        
        var projects_copy = this.state.projects;

        for (let i = 0; i < projects_copy.length; i++){
            if (projects_copy[i].project_item == this.state.current_project) {
                projects_copy[i].project_item = e;
            }
        }

        this.setState({ projects: projects_copy });

        firestore_list.set({
            projects_list:this.state.projects
        })
    }

    renderProjects() {
        
        return this.state.projects.map((item) => {

            return (
                 <div className = "skill-item">
                        
                    <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                    <StyledEditText
                        onSave = {(e) => {this.ChangeProject(e)}}
                        onEditingStart = {(e) =>{this.setState({current_project:e})}}
                        showButtonsOnHover
                        value = {item.project_item}
                        className="skill-title-name">
                        
                        
                        </StyledEditText>
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