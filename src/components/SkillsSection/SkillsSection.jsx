import React from 'react'
import './SkillsSection.css';
import { FaMouse } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs'
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
    .doc("skills");

const StyledEditText = styled(EditText)`

div[editext="view-container"], div[editext="edit-container"] {
    color: #000;
    width: 600px;
  }
`

export default class SkillsSection extends React.Component {


    state = {
        skills: [],
        current_skill:"",
        toggleVisibile: false,
        current_item: "",
        togleModal: false,
        item_to_delete:"",
    }

    constructor(props) {
        super(props);

         firestore_list.onSnapshot(doc => {
            this.setState({
                skills:doc.data().skills_list
            })
        })
    }

    changeSkill(e) {
        
        var skills_copy = this.state.skills;

        for (let i = 0; i < skills_copy.length; i++){
            if (skills_copy[i].skill_item == this.state.current_skill) {
                skills_copy[i].skill_item = e;
            }
        }

        this.setState({ skills: skills_copy });

        firestore_list.set({
            skills_list: this.state.skills
        })
    }

    renderSkills() {
        return this.state.skills.map((item) => {
            return (
                 <div className = "skill-item">
                        
                    <BsArrowRight className = "arrow-icon"></BsArrowRight>
                    <StyledEditText
                        value={item.skill_item}
                        showButtonsOnHover
                        onSave = {(e) => this.changeSkill(e)}
                        onEditingStart = {(e) => {this.setState({current_skill:e})}}
                        className="skill-title-name">
                    </StyledEditText>
                    <BsFillTrashFill onClick={() => {

                        this.setState({ toggleModal: !this.state.toggleModal });

                        this.setState({ item_to_delete: item.skill_item });
                        
                    }}
                        className = "trash-icon-skills"
                    ></BsFillTrashFill>
                    </div>
            )
        })
    }

    removeSkill() {
        
         firestore_list.update({
                            skills_list: firebase.firestore.FieldValue.arrayRemove({
                                skill_item:this.state.item_to_delete
                            })
                        })
    }

    AddSkill = () => {
        if (this.state.current_item == "") {
            
        }
        else {
           
            firestore_list.update({
                skills_list: firebase.firestore.FieldValue.arrayUnion({
                    skill_item: this.state.current_item
                })
            })

            this.setState({ toggleVisibile: !this.state.toggleVisibile })
        }
    }

    render() {
        return (
            <div className="skills-container">
                            
                     <FaMouse className = "skills-icon"></FaMouse>
                <text className="work-header">SKILLS</text>
                <AiOutlinePlus className="add-skill-icon"
                onClick = {() => this.setState({toggleVisibile:!this.state.toggleVisibile})}
                ></AiOutlinePlus>

                 <div style = {{display: this.state.toggleVisibile ? "block" :"none"}}>
                    <form className = "add-form">
                        <input type="input"
                            onChange={(e) => this.setState({ current_item: e.target.value })}
                            placeholder="Add a new Skill"
                            className="add-skill">
                        </input>
                        <button className="add-button-interest" type="reset"
                            onClick={() => { this.AddSkill() }}>Add</button>
                    </form>
                </div>                

                <div className = "skills-list">
                    {this.renderSkills()}
                </div>

                <div style = {{display:this.state.toggleModal ? "block": "none"}} className="modal">
                    <div className = "modal-content">
                        <div className = "message">
                            <text>Are you sure u want to delete this item ?</text>
                            <div className = "buttons" >
                                <button
                                    onClick={() => { this.removeSkill(); this.setState({ toggleModal: !this.state.toggleModal }) }}
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

