'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Main from './main';
import Sprites from '../../../../sprite';

export default class MenuAAA extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    var items = [{
      title: 'Inicio',
      url:'inicio'
    }, {
      title: 'Inscripciones',
      url:'inscripciones'
    }, {
      title: 'Proyecto K',
      url:'proyecto-k'
    }, {
      title: 'Extraescolares',
      url:'extraescolares'
    }, {
      title: 'Boletines',
      url:'boletines'
    }, {
      title: 'Contacto',
      url:'contacto'
    }];

    var icons = [{
      title: 'facebook',
      style: _.merge({}, Sprites.General.Facebook, {
        display: 'inline-block'
      }),
      url: '#'
    }];


    return (
      <Main items={items} tel="logo" icons={icons} />
    );
  }
}
