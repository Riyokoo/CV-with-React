import React from 'react'
import './SkillsSection.css';
import { FaMouse } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';


var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("skills");

export default class SkillsSection extends React.Component {


    state = {
        skills:[],
    }

    constructor(props) {
        super(props);

         firestore_list.onSnapshot(doc => {
            this.setState({
                skills:doc.data().skills_list
            })
        })
    }

    renderSkills() {
        return this.state.skills.map((item) => {
            return (
                 <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            {item.skill_item}
                        </text>
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