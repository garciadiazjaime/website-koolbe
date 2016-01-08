import React from "react";
import { Link } from 'react-router';

import Menu from './layout/menu/menuAAA';
import Inscripciones from './sections/aboutus/';
import FooterAAA from './layout/footer/footerAAA';


export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <FooterAAA />
      </div>
    );
  }
}
