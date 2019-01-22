import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Languages from './components/Languages'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Contact/>
        <Experience/>

        <Education/>

        <Skills/>
        <Languages/>
        <Hobbies/>
      </div>
    );
  }
}

export default App;
