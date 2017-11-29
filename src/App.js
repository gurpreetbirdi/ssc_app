import React, { Component } from 'react';
// import Iframe from './components/Iframe';
import Iframe2 from './components/Iframe2';

class App extends Component {
  render() {
    const labelStrings = JSON.stringify({
      'labelStrings': '1234'
    });
    
    return (
      <div className="App">
      <p>SSC Portal</p>
      <Iframe2 labelStrings={labelStrings} />
      </div>
    );
  }
}

export default App;

