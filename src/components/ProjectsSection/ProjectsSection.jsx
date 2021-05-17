import React from 'react'
import './ProjectsSection.css';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';
import {AiTwotoneFolder} from 'react-icons/ai'
import fb from '../../Fire.js';
import firebase from 'firebase';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';
import styled, { css } from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';



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
        current_item: "",
        togleModal: false,
        togleVisibile:false,
        item_to_delete:"",
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
                    <BsFillTrashFill
                        
                        onClick={() => {
                            this.setState({ togleModal:!this.state.togleModal });

                                this.setState({ item_to_delete: item.project_item });
                        }}
                    className = "trash-icon-projects"
                    ></BsFillTrashFill>
                    </div>
            )
        })
    }

    AddProject = () => {
        if (this.state.current_item == "") {
            
        }
        else {
           
            firestore_list.update({
                projects_list: firebase.firestore.FieldValue.arrayUnion({
                    project_item: this.state.current_item
                })
            })

            this.setState({ togleVisibile: !this.state.togleVisibile })
        }
    }

    removeProject() {

         firestore_list.update({
                            projects_list: firebase.firestore.FieldValue.arrayRemove({
                                project_item:this.state.item_to_delete
                            })
                        })
    }


    render() {
        return (
            <div className="skills-container">
                

                     <AiTwotoneFolder className = "projects-icon"></AiTwotoneFolder>
                <text className="work-header">PROJECTS</text>
                <AiOutlinePlus
                    onClick = {() => this.setState({togleVisibile:!this.state.togleVisibile})}
                    className="add-skill-icon"></AiOutlinePlus>
        
                <div style = {{display: this.state.togleVisibile ? "block" :"none"}}>
                    <form className = "add-form">
                        <input type="input"
                            onChange={(e) => this.setState({ current_item: e.target.value })}
                            placeholder="Add a new Skill"
                            className="add-skill">
                        </input>
                        <button className="add-button-interest" type="reset"
                            onClick={() => { this.AddProject() }}>Add</button>
                    </form>
                </div>    
                
                <div className = "skills-list">
                    {this.renderProjects()}
                </div>

                 <div style = {{display:this.state.togleModal ? "block": "none"}} className="modal">
                    <div className = "modal-content">
                        <div className = "message">
                            <text>Are you sure u want to delete this item ?</text>
                            <div className = "buttons" >
                                <button
                                    onClick={() => { this.removeProject(); this.setState({ togleModal: !this.state.togleModal }) }}
                                    className="yes-button">YES</button>
                                <button onClick = {() => this.setState({togleModal:!this.state.togleModal})} className = "no-button">NO</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}