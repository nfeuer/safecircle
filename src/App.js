import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ButtonAppBar from './ButtonAppBar';
import FloatingActionButtons from './FloatingActionButtons';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ButtonAppBar />
          <FloatingActionButtons />
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;