import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Components/Header';
import CanvasThreeJS from './Components/CanvasThreeJS';
import useStyles from './assets/style/baseStyle';
import './assets/style/App.css';

const App = () => {
  const theme = useSelector(state => state.theme);
  const classes = useStyles(theme);

  return (
    <>
      <div className={classes.app}>
        <Header />
        <CanvasThreeJS />
      </div>
    </>
  )
}

export default App;
