'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Button1 extends React.Component {
  render() {
    return (
      <a className={style[this.props.classTitle]} href={this.props.refs}>
        <h2>Plantel</h2>
        {this.props.children}
      </a>
    );
  }
}
