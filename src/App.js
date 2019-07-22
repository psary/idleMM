import React from 'react';
import './App.css';
import { Loop } from 'react-game-kit';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Game from './Component/Game';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
  },
)
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Loop>
            <Game>
              
            </Game>
        </Loop>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
