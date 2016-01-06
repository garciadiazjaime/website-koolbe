'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Title9 extends React.Component {
  render() {
    return (
      <div className={style.title9}>
      	<h2>Plantel</h2>
        {this.props.children}
      </div>
    );
  }
}
