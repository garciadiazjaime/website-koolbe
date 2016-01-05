'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Constants from '../../../constants';
import SimpleCarousel from '../../widgets/carousel/simpleCarousel';
import SimpleCard from '../../widgets/card/simpleCard';

import Sprites from '../../../sprite';
import CarouselData from './carouselProyectKData';



export default class ProyectoK extends Component {

  render() {
    var cards = this.getCards();

    return (<div className="container" style={this.getStyle().wrapper}>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className={style.proyectoK}>
              <SimpleCard data={cards[0]} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <SimpleCarousel data={cards[1]} />
          </div>
        </div>
      </div>
      </div>
    );
  }

  getCards() {

    return [{
      wrapper: {
        style: {}
      },
      elements: [{
        type: 'subtitle',
        text: ['MÉTODO ACADÉMICO']
      }, {
        type: 'title',
        text: ['El Proyecto K']
      }, {
        type: 'description',
        text: ['Instituto Ramiro Kolbe, es una institución privada <br />que ofrece a niños y adolescentes una fórmula <br />educativa de excelente nivel, sustentada por ser <br />bicultural, bilingüe, tecnológica, integral y religiosa, <br /> con amplios valores']
      }, {
        type: 'link',
        text: 'Conóce más',
        url: '#'
      }]
    }, CarouselData]
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '30px;'
      }
    }
  }
}
