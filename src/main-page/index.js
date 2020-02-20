import React, { Component } from 'react';
import './main-page.css';
import Header from './header';

class App extends Component {

  render(){
    return (
      <div className="container">
        <Header subtitle="Bringing New Homes Right To Your Door"/>
      </div>
    );
  }
}

export default App;
