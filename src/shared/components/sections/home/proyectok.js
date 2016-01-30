import React, { Component } from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import SimpleCarousel from '../../widgets/carousel/simpleCarousel';
import SimpleCard from '../../widgets/card/simpleCard';
import CarouselData from './carouselProyectKData';


export default class ProyectoK extends Component {

  getCards() {
    return [{
      wrapper: {
        style: {},
      },
      elements: [{
        type: 'subtitle',
        text: ['M&Eacute;TODO ACAD&eacute;MICO'],
      }, {
        type: 'title',
        text: ['El Proyecto K'],
      }, {
        type: 'description',
        text: ['Instituto Ramiro Kolbe, es una institución privada que ofrece ' +
          'a ni&ntilde;os y adolescentes una fórmula educativa de excelente nivel, ' +
          'sustentada por ser bicultural, biling&uuml;e, tecnológica, integral y religiosa, ' +
          'con amplios valores axiológicos y transmisora de cultura y tradiciones.'],
      }, {
        type: 'link',
        text: 'Conoce m&aacute;s',
        url: 'proyecto-k',
      }],
    }, CarouselData];
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '30px',
        marginBottom: '20px',
      },
    };
  }

  render() {
    const cards = this.getCards();
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
}
