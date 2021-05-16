import React from 'react'
import './SkillsSection.css';
import { FaMouse } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';
import styled, { css } from 'styled-components'




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
                    </div>
            )
        })
    }

    render() {
        return (
            <div className="skills-container">
                            
                     <FaMouse className = "skills-icon"></FaMouse>
                    <text className = "work-header">SKILLS</text>
        

                <div className = "skills-list">
                    {this.renderSkills()}
                </div>


            </div>
        )
    }
}

