'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Button1 extends React.Component {
  render() {
    return (
      <a className={style.button1} href={this.props.ref}>
        {this.props.children}
        <span />
      </a>
    );
  }
}