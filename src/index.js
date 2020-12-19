import React from 'react';
import ReactDOM from 'react-dom';
import {ClickityClick} from './components/ClickityClick'

ReactDOM.render(
  <div>
    Mount Components Here
    <ClickityClick  hasBeenClicked={true}/>
    <ClickityClick  hasBeenClicked={true}   currentTheme={'red'}/>
    <ClickityClick  hasBeenClicked={false}  currentTheme={'purple'}/>
    <ClickityClick  hasBeenClicked={true} currentTheme={'blue'}/>
  </div>,
  document.getElementById('root')
);
