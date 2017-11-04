import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6, Feature7, Feature8 } from './AllFeatures';

if (Feature4 !== null) {
  console.log('Feature4 is available', Feature4);
  // feature is available
}

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Feature Toggling during build thru Webpack</h1>
        </header>
        <h3>List of Features activated</h3>
        <p className="App-intro">
           { Feature1 && <Feature1/> }
           { Feature2 && <Feature2/> }
           { Feature3 && <Feature3/> }
           { Feature4 && <Feature4/> }
           { Feature5 && <Feature5/> }
           { Feature6 && <Feature6/> }
           { Feature7 && <Feature7/> }
           { Feature8 && <Feature8/> }

        </p>
      </div>
    );
  }
}

export default App;
