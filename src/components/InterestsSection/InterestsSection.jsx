import React from 'react';
import './InterestsSection.css';
import { BsSquareFill } from 'react-icons/bs'
import fb from '../../Fire.js';
import firebase from 'firebase';
import firestore from '@firebase/firestore';
import 'react-phone-input-2/lib/style.css'
import EditText from 'react-editext';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("interests");


export default class InterestsSection extends React.Component {


    state = {
        interests: [],
        current_item:"",
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                interests:doc.data().interests_list,
            })
        })
    }

    changeInterest(e) {

        var interests_copy = this.state.interests;

        

        for (let i = 0; i < interests_copy.length; i++){
            if (interests_copy[i].interest_item == this.state.current_item) {
                interests_copy[i].interest_item = e;
            }
        }

        this.setState({ interests: interests_copy });

        firestore_list.set({
             interests_list:this.state.interests
        })
    }

    renderInterests() {
        return this.state.interests.map(item => {
            
            return (
                <div className = "interest-item">
                    
                    <EditText
                    showButtonsOnHover
                        value={item.interest_item}
                        onEditingStart={(e) => {this.setState({current_item:e})}}
                        onSave={(e) => this.changeInterest(e)} ></EditText>
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