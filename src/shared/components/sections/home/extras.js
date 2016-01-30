import React, { Component } from 'react';
import _ from 'lodash';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import SimpleCard from '../../widgets/card/simpleCard';
import Sprites from '../../../sprite';


export default class Extras extends Component {

  getCards() {
    return [{
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Home.Beo, {
          display: 'inline-block',
        }),
      }, {
        type: 'title',
        text: ['Somos <br />Escuela BEO'],
      }, {
        type: 'description',
        text: ['BRITISH ENGLISH OLYMPICS <br />Certificación como escuela' +
          ' dentro <br />del BEO BOARD.'],
      }, {
        type: 'link',
        text: 'Conoce m&aacute;s',
        url: 'proyecto-k/somos-escuela-beo',
      }],
    }, {
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Home.Extraescolares, {
          display: 'inline-block',
        }),
      }, {
        type: 'title',
        text: ['Actividades <br />Extraescolares'],
      }, {
        type: 'description',
        text: ['El fin principal de las actividades <br />extraescolares es canalizar' +
          ' la <br />vocación de los ni&ntilde;os.'],
      }, {
        type: 'link',
        text: 'Conoce m&aacute;s',
        url: 'extraescolares',
      }],
    }, {
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Home.Religioso, {
          display: 'inline-block',
        }),
      }, {
        type: 'title',
        text: ['Filosof&iacute;a <br />Religiosa'],
      }, {
        type: 'description',
        text: ['La educación a favor del hombre <br />y de la mujer creados a imagen ' +
          '<br />y semejanza de Dios.'],
      }, {
        type: 'link',
        text: 'Conoce m&aacute;s',
        url: 'proyecto-k/filosofia-religiosa',
      }],
    }];
  }

  render() {
    const cards = this.getCards();

    return (<div className="container">
        <div className={style.extras}>
          {
            cards.map((card, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <div className="row">
                    <SimpleCard data={card} />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
