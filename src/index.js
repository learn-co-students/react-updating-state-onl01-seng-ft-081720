import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCounter from './components/ButtonCounter';
import LightSwitch from './components/Lightwitch';

const { default: ClickityClick } = require("./components/ClickityClick");

ReactDOM.render(
  <div>
<ClickityClick />
<ButtonCounter />
<br />
<LightSwitch />
    {/* Mount Components Here */}
  </div>,
  document.getElementById('root')
);
