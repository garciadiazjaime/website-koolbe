'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Button3 extends React.Component {
  render() {
    return (
      <a className={style.button3} href={this.props.ref}>
      	<h2>Plantel</h2>
        {this.props.children}
        <span />
      </a>
    );
  }
}
