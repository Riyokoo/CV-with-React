import React from 'react';
import './DescriptionSection.css';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';


var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("short-description");

var firestore_list_2 = fb
    .firestore()
    .collection("CV")
    .doc("short-description");




export default class DescriptionSection extends React.Component {


    
    state = {
        nume: "",
        prenume:"",
        short_description:"",
    }

    constructor(props) {
        super(props);

       firestore_list.onSnapshot(doc => {
            this.setState({
                nume: doc.data().nume,
                prenume:doc.data().prenume,
                short_description:doc.data().short_description,
                
            })
        })
    }
    
    changeNume(e) {
        
        firestore_list.update({
            nume:e
        })

        firestore_list_2.update({
            nume:e
        })
    }

    changePrenume(e) {
        
        firestore_list.update({
            prenume:e
        })

        firestore_list_2.update({
            prenume:e
        })
    }

    changeDescription(e) {
        
        firestore_list.update({
            short_description:e
        })
    }
    


    render() {

      


        return (
            
            <div className = "description-container">
                
                <div  className="header-name">
                    <EditText showButtonsOnHover onSave = {(e)=> this.changePrenume(e)} value = {this.state.prenume}></EditText>
                    <EditText showButtonsOnHover className = "edit-text" onSave = {(e) => this.changeNume(e)} value = {this.state.nume}></EditText>
                    

                </div>
                <div className = "short-summary">
                    <EditText showButtonsOnHover type = "textarea" onSave = {(e) => this.changeDescription(e)} value = {this.state.short_description} className = "description">
                        
                    </EditText>
                </div>

                <hr></hr>

            </div>
        )
    }

}