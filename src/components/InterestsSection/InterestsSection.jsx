import React from 'react';
import './InterestsSection.css';
import { BsSquareFill } from 'react-icons/bs'
import fb from '../../Fire.js';
import firebase from 'firebase';
import firestore from '@firebase/firestore';
import 'react-phone-input-2/lib/style.css'
import EditText from 'react-editext';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("interests");


export default class InterestsSection extends React.Component {


    state = {
        interests: [],
        current_item: "",
        toggleVisibile: false,
        toggleModal: false,
        item_to_delete:"",
        
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
                        onSave={(e) => this.changeInterest(e)} >
                        
                    </EditText>
                    <BsFillTrashFill onClick={() => {
                        

                        this.setState({ toggleModal: !this.state.toggleModal });

                        this.setState({ item_to_delete: item.interest_item });

                           
                        
                        
                       

                    }} className = "trash-icon"></BsFillTrashFill>
            </div>
           )

        })
    }

    removeInterest() {

         firestore_list.update({
                            interests_list: firebase.firestore.FieldValue.arrayRemove({
                                interest_item:this.state.item_to_delete
                            })
                        })
    }

    AddInterest = () => {
        
        if (this.state.current_item == "") {
            
        }

        else {
            firestore_list.update({
            interests_list: firebase.firestore.FieldValue.arrayUnion({
                interest_item: this.state.current_item
            })
        })

        this.setState({ toggleVisibile: !this.state.toggleVisibile });    
        }

    }

   

    render() {

        return (
            
            <div className = "interests-section-container">

                <text className="interests-header" onClick={() => { console.log(this.state.interests); }}>INTERESTS</text>
                 <AiOutlinePlus className  ="add-icon" onClick = {() => {this.setState({toggleVisibile:!this.state.toggleVisibile})}}></AiOutlinePlus>

                 <div style = {{display: this.state.toggleVisibile ? "block" :"none"}}>
                    <form>
                        <input type="input"
                            onChange={(e) => this.setState({ current_item: e.target.value })}
                            placeholder="Add a new Interest"
                            className="add-interest">
                        </input>
                    <button className = "add-button" type = "reset" onClick={() => { this.AddInterest()}}>Add</button>
                    </form>
                </div>

                <text className = "interests-list">
                    {this.renderInterests()}
                </text>

                <div style = {{display:this.state.toggleModal ? "block": "none"}} className="modal">
                    <div className = "modal-content">
                        <div className = "message">
                            <text>Are you sure u want to delete this item ?</text>
                            <div className = "buttons" >
                                <button
                                    onClick={() => { this.removeInterest(); this.setState({ toggleModal: !this.state.toggleModal }) }}
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