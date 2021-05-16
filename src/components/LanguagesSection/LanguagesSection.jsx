import React from 'react';
import './LanguagesSection.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import EditText from 'react-editext';


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
        languages: [],
        current_language:"",
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                languages:doc.data().languages_list,
            })
        })
    }

    changeLanguage(e) {
        
        var languages_copy = this.state.languages;

        for (let i = 0; i < languages_copy.length; i++){
            if (languages_copy[i].language_item == this.state.current_language) {
                languages_copy[i].language_item = e;
            }
        }

        this.setState({ languages: languages_copy });

        firestore_list.set({
            languages_list:this.state.languages
        })
    }


    renderLanguages() {
        
        return this.state.languages.map(item => {
            return (
                <div className = "language-item">
                    <EditText
                        showButtonsOnHover
                        onEditingStart = {(e) => this.setState({current_language:e})}
                        onSave = {(e) => this.changeLanguage(e)}
                        value = {item.language_item}
                    ></EditText>
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