import React from "react";
import { Link } from 'react-router';

export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">inicio</Link></li>
          <li><Link to="/inscripciones">About</Link></li>
          <li><Link to="/contactanos">Contactanos</Link></li>
          <li><Link to="/proyecto-k">Proyecto K</Link></li>
          <li><Link to="/extraescolares">Extraescolares</Link></li>

        </ul>
        {this.props.children}
      </div>
    );
  }
}
