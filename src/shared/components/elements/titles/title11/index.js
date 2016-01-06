'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Title11 extends React.Component {
  render() {
    return (
      <h1 className={style.title11}>
        {this.props.children}
      </h1>
    );
  }
}
