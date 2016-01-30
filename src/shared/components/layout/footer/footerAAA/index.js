import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import menuData from '../../../../menuData';
import SimpleCard from '../../../widgets/card/simpleCard';
import Sprites from '../../../../sprite';


export default class FooterAAA extends Component {

  getMenu(data, className) {
    const items = data.map((item, index) => {
      const children = item.children ? this.getMenu(item.children) : null;

      return (<li key={index} className={className || style.menuChild}>
        {
          item.type ?
          <a href={item.url} target="_blank">{item.title}</a> :
          <Link to={item.url} dangerouslySetInnerHTML={this.sanitize(item.title)} />
        }
        {children}
      </li>);
    }, this);

    return (<ul>{items}</ul>);
  }

  getAddress(data) {
    const items = data.map((item, index) => {
      return (<div className="col-sm-4 hidden-sm hidden-xs" key={index}>
        <div className="row">
          <SimpleCard data={item} />
        </div>
      </div>);
    });

    return (<div id={style.addresses} className="hidden-sm hidden-xs">{items}</div>);
  }

  getCards() {
    return [{
      elements: [{
        type: 'link',
        url: 'inicio',
        text: '&nbsp;',
        style: _.merge({}, Sprites.General.LogoFooter, {
          display: 'inline-block',
        }),
      }],
    }, {
      elements: [{
        type: 'description',
        text: ['S&iacute;guenos en :'],
      }, {
        type: 'link',
        url: '#',
        text: '&nbsp;',
        style: _.merge({}, Sprites.General.Facebook, {
          float: 'left',
          display: 'inline-block',
        }),
      }],
    }];
  }

  sanitize(value) {
    return {
      __html: value,
    };
  }

  render() {
    const cards = this.getCards();
    const data = [{
      name: 'POOL',
      url: 'http://somospool.com',
      title: 'somos pool',
    }, {
      name: 'MINT',
      url: 'http://mintitmedia.com',
      title: 'Diseño y Desarrollo Web en Tijuana',
    }];

    return (<div id={style.footer}>

        <div className="container">
          <div className={style.footerWrapper}>

            <div className="row">
              <div className="col-sm-8 col-xs-5">
                <div className="row">
                  <SimpleCard data={cards[0]} />
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
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
                Un proyecto de:&nbsp;
                <a href={data[0].url} title={data[0].title} target="_blank">{data[0].name}</a>
                &nbsp;&nbsp;
                Código por:&nbsp;
                <a href={data[1].url} title={data[1].title} target="_blank">{data[1].name}</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
