import React from 'react';
import './App.css';
import MainContent from '@src/modules/index/index'

class App extends React.Component {
  render() {
    return (
      <div  className='wrap-App'>
           <MainContent/>
      </div>
    );
  }
} 

export default App;
