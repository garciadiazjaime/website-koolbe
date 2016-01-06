'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Wrapper3 extends React.Component {
  render() {
    return (
      <div className={style.wrapper3}>
        {this.props.children}
      </div>
    );
  }
}
