'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class ImageInsert extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={this.props.url} className={style[this.props.classTitle]}/>
    );
  }
}
