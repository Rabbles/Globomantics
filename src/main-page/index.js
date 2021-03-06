import React, { Component } from 'react';
import './main-page.css';
import Header from './header';

class App extends Component {

  state = {};

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(response => response.json)
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }

  determineFeaturedHouse = () => {
    if(this.allHouses){
      const randomIndex = Math.floor(Math.random * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState = ({featuredHouse});
    }
  }

  render(){
    return (
      <div className="container">
        <Header subtitle="Bringing New Homes Right To Your Door"/>
      </div>
    );
  }
}

export default App;
