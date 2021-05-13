import React from 'react';
import './App.css';
import CvContainer from './components/CV-Container/CV-Container.jsx';

export default class App extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="App">

        <CvContainer></CvContainer>
        
      </div>
  

 
    );
  }
  
}


