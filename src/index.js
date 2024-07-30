import React from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent from './ButtonComponent';

const Widget = {
  init: (selector) => {
    ReactDOM.render(<ButtonComponent />, document.querySelector(selector));
  },
};

window.Widget = Widget;