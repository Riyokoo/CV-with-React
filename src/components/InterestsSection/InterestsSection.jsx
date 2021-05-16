import React from 'react';
import './InterestsSection.css';
import { BsSquareFill } from 'react-icons/bs'
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("interests");


export default class InterestsSection extends React.Component {


    state = {
        interests:[],
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                interests:doc.data().interests_list,
            })
        })
    }

    renderInterests() {
        return this.state.interests.map(item => {
            
            return (
                <div className = "interest-item">
                    <BsSquareFill className="square-icon"></BsSquareFill><text>{item.interest_item}</text>
            </div>
           )

        })
    }

   

    render() {

       
        
       

        return (
            
            <div className = "interests-section-container">

                <text className = "interests-header" onClick = {() => {console.log(this.state.interests);}}>INTERESTS</text>

                <text className = "interests-list">
                    {this.renderInterests()}
                </text>
            
            </div>
        )
    }

}