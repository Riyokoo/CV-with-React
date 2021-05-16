import React from 'react';
import './LanguagesSection.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("languages");

const options = [
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "B1", label: "B1" },
    { value: "B2", label: "B2" },
    { value: "C1", label: "C1" },
    { value: "c2", label: "C2" },
    
]

export default class LanguagesSection extends React.Component {


    state = {
        languages:[],
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                languages:doc.data().languages_list,
            })
        })
    }

    renderLanguages() {
        
        return this.state.languages.map(item => {
            return (
                <div className = "language-item">
                    <text>{item.language_item}</text>
                    <Select className = "select" options = {options}></Select>

                </div>
            )
        })
    }

    render() {
        return (
            
            <div className="languages-section">
                
                <div className = "languages-header">
                    <text>LANGUAGES</text>
                </div>
                

                <div className = "languages-list">
                    {this.renderLanguages()}
                </div>

            </div>

        )
    }
    
}