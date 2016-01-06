'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Image9 extends React.Component {
  render() {
    return (
      <img className={style.image9} src="/images/proyectok/mrkolbe.png" />
    );
  }
}
