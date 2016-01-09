import React, { Component } from 'react';

import Main from './main';
import menuData from '../../../../menuData';

export default class MenuAAA extends Component {

  render() {
    return (
      <Main items={menuData.items} tel="logo" icons={menuData.icons} />
    );
  }
}
