'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Title2 extends React.Component {
  render() {
    return (
      <h1 className={style[this.props.className]}>
        <h2>Plantel</h2>
        {this.props.children}
      </h1>
    );
  }
}
