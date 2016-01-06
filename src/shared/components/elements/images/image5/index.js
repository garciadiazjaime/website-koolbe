'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

export default class Image5 extends React.Component {
  render() {
    return (
      <img className={style.image5} src="http://127.0.0.1:3030/images/aboutus/inscripcion_pie.jpg" />
    );
  }
}
