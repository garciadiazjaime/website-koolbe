'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};


export default class Main extends Component {

  render() {

    return (
      <div className={style.wrapper}>
        <div className="container">
          <nav className="navbar navbar-default" className={style.navbarDefault}>
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-main-menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div>
                <div>
                  <i></i>
                </div>
                <a className={"navbar-brand " + style.navbarBrand} href={"tel:" + this.props.tel}>{this.props.tel}</a>
              </div>

            </div>

            <div className="hidden-xs hidden-sm">&nbsp;</div>

            <div className="collapse navbar-collapse" id="bs-navbar-main-menu">
              <ul className="nav navbar-nav">
                {this.getItems(this.props.items)}
              </ul>
              <div>
                {this.getIcons(this.props.icons)}
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  getItems(data) {
    return data.map((item, index) => {
      return (<li key={index}><Link to={item.url} className={style.navbarNavAnchor}>{item.title}</Link></li>);
    });
  }

  getIcons(data) {
    return data.map((item, index) => {
      return (<a key={index}>
        sn
    </a>);
    });
  }
}
