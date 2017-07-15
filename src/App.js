import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Button from 'material-ui/Button';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Button>
          Hello World
        </Button>
      </MuiThemeProvider>
    );
  }

}

export default App;