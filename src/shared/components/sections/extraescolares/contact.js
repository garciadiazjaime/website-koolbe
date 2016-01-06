import React from "react";
import { Link } from 'react-router';
import _ from 'lodash';

import SimpleCard from '../../widgets/card/simpleCard';
import Sprites from '../../../sprite';

export default class Activities extends React.Component {

  render() {
    const cards = this.getCards();

    return (<div className="row">
        <div className="col-sm-8">
          <SimpleCard data={cards[0]} />
        </div>
        <div className="col-sm-4">
          <SimpleCard data={cards[1]} />
        </div>
      </div>
    );
  }

  getCards() {
    return [{
      elements: [{
        type: 'description',
        text: ['*Los grupos se abren según la demanda que haya de los <br />mismos, siendo el mínimo de 8 a 10 alumnos según la <br /> actividad. Estas tienen un costo adicional mensual y <br />horarios específicos.']
      }]
    }, {
      elements: [{
        type: 'link',
        url: 'contactanos',
        text: 'Contáctanos'
      }]
    }]
  }
}
