'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Hr1 extends React.Component {
  render() {
    return (
      <hr className={style[this.props.className]} />
    );
  }
}
