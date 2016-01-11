import React from 'react';
import _ from 'lodash';

import SimpleCard from '../../widgets/card/simpleCard';
import Sprites from '../../../sprite';

export default class Activities extends React.Component {

  getCards() {
    return [{
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Extra.Deportes),
      }, {
        type: 'title',
        text: ['Actividades <br />Deportivas'],
      }, {
        type: 'description',
        text: ['Fútbol, Básquetbol, Volibol, <br /> entre otras.'],
      }],
    }, {
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Extra.Artisticas),
      }, {
        type: 'title',
        text: ['Actividades <br />Artísticas'],
      }, {
        type: 'description',
        text: ['Música, Ballet, Piano, <br />Danza, Guitarra, Violín,<br /> ' +
          'Dibujo y Pintura, etc.'],
      }],
    }, {
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Extra.Robotica),
      }, {
        type: 'title',
        text: ['Actividades del <br />Área de Conocimiento'],
      }, {
        type: 'description',
        text: ['Robótica, Cursos de <br />nivelación, entre otros.'],
      }],
    }];
  }

  render() {
    const cards = this.getCards();

    return (<div className="row">
        <div className="col-sm-4">
          <SimpleCard data={cards[0]} />
        </div>
        <div className="col-sm-4">
          <SimpleCard data={cards[1]} />
        </div>
        <div className="col-sm-4">
          <SimpleCard data={cards[2]} />
        </div>
      </div>
    );
  }
}
