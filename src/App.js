import React from 'react';
import './App.css';
import CvContainer from './components/CV-Container/CV-Container.jsx';
import LeftHeader from './components/LeftHeader/LeftHeader';

export default class App extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="App">

        <LeftHeader></LeftHeader>
        <CvContainer></CvContainer>
        
      </div>
  

 
    );
  }
  
}


