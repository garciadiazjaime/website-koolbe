'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Image10 extends React.Component {
  render() {
    return (
      <img className={style.image10} src="images/proyectok/escudo.png" />
    );
  }
}