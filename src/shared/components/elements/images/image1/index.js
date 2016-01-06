'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Image1 extends React.Component {
  render() {
    return (
      <img  className={style.image1}  src="images/aboutus/inscripcion_preescolar.jpg" />
    );
  }
}
