import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.cancer.org/cancer/penile-cancer/about/what-is-penile-cancer/_jcr_content/par/textimage/image.img.jpg/1530553003325.jpg" className="App-logo" alt="logo" />
          <p>
            Jon <code>is/A.dick</code> and a menance to society.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
