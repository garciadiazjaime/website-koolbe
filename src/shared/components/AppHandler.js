import React from 'react';

import menuData from '../menuData';
import Menu from './layout/menu/menuAAA';
import FooterAAA from './layout/footer/footerAAA';


export default class AppHandler extends React.Component {

  clickHandler() {
    if ($('.navbar-header button').is(':visible')) {
      $('.navbar-header button').click();
    }
  }

  render() {
    return (
      <div>
        <Menu items={menuData.items} icons={menuData.icons} onClick={this.clickHandler} />
        {this.props.children}
        <FooterAAA />
      </div>
    );
  }
}

AppHandler.propTypes = {
  children: React.PropTypes.object.isRequired,
};
