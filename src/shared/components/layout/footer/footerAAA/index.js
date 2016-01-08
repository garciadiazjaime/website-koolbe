'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import menuData from '../../../../menuData';
import SimpleCard from '../../../widgets/card/simpleCard'
import Sprites from '../../../../sprite';


export default class FooterAAA extends Component {


  render() {
    const cards = this.getCards();

    return (<div id={style.footer}>

        <div className="container">
          <div className={style.footerWrapper}>

            <div className="row">
              <div className="col-sm-8">
                <div className="row">
                  <SimpleCard data={cards[0]} />
                </div>
              </div>
              <div className="col-sm-4">
                <div className={style.followUs}>
                  <SimpleCard data={cards[1]} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className={style.footerMenu}>
                {this.getMenu(menuData.items, style.menuParent)}

                {this.getAddress(menuData.addresses)}
              </div>
            </div>

          </div>
        </div>

        <div className={style.powered}>
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                Todos los derechos reservados Branding Pool 2015
              </div>
              <div className="col-sm-5">
                Un proyecto de: <a href="http://somospool.com" title="somos pool" target="_blank">POOL</a> &nbsp;&nbsp;
                Código por: <a href="http://mintitmedia.com" title="Diseño y Desarrollo web en Tijuana" target="_blank">MINT</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  getMenu(data, className) {
    const items = data.map((item, index) => {
      var children = item.children ? this.getMenu(item.children) : null;

      return (<li key={index} className={className||style.menuChild}>
        <Link to={item.url}>{item.title}</Link>
        {children}
      </li>);
    }, this);

    return (<ul>{items}</ul>);
  }

  getAddress(data) {
    const items = data.map((item, index) => {
      return (<div className="col-sm-4" key={index}>
        <div className="row">
          <SimpleCard data={item} />
        </div>
      </div>);
    });

    return (<div id={style.addresses}>{items}</div>);
  }

  getCards() {
    return [{
      elements: [{
        type: 'link',
        url: '#',
        text: '&nbsp;',
        style: _.merge({}, Sprites.General.LogoFooter, {
          display: 'inline-block'
        })
      }]
    }, {
      elements: [{
        type: 'description',
        text: ['Síguenos en :']
      }, {
        type: 'link',
        url: '#',
        text: '&nbsp;',
        style: _.merge({}, Sprites.General.Facebook, {
          float: 'left',
          display: 'inline-block'
        })
      }]
    }]
  }
}
