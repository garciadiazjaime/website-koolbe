'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class paragraph2 extends React.Component {
  render() {
    return (
      <p className={style.paragraph2}>
        {this.props.children}
      </p>
    );
  }
}
