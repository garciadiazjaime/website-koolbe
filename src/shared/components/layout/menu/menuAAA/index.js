'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Main from './main';
import Sprites from '../../../../sprite';
import menuData from '../../../../menuData';

export default class MenuAAA extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Main items={menuData.items} tel="logo" icons={menuData.icons} />
    );
  }
}
