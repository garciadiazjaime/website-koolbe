'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class List4 extends React.Component {
  render() {
    return (
      <ul className={style.list4}>
        {this.props.children}
      </ul>
    );
  }
}