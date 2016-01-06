'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Wrapper1B extends React.Component {
  render() {
    return (
      <div className={style.wrapper1B}>
        {this.props.children}
      </div>
    );
  }
}
