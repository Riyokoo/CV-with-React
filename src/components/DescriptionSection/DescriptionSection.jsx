import React from 'react';
import './DescriptionSection.css';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
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
    
    


    render() {

      


        return (
            
            <div className = "description-container">
                
                <div  className="header-name">
                    <text>{this.state.prenume} </text>
                    <text>{this.state.nume}</text>

                </div>
                <div className = "short-summary">
                    <text className = "description">
                        {this.state.short_description}
                    </text>
                </div>

                <hr></hr>

            </div>
        )
    }

}