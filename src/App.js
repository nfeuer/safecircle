import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ButtonAppBar from './ButtonAppBar';
import FloatingActionButtons from './FloatingActionButtons';
import Card from './Card';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="title-bar">
            <ButtonAppBar />
          </div>
          <FloatingActionButtons />
          <div className="class-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;