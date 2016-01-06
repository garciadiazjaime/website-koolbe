import React from "react";
import { Link } from 'react-router';

import SimpleCard from '../../widgets/card/simpleCard';
import Intro from './intro';


export default class ExtraescolaresSection extends React.Component {

  render() {
    const cards = this.getCards();

    return (<div className="row">
        <div className="col-sm-5">
          <div className="row">
            <SimpleCard data={cards[0]} />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="row">
            <SimpleCard data={cards[1]} />
          </div>
        </div>
      </div>
    );
  }

  getCards() {
    return [{
      elements: [{
        type: 'subtitle',
        text: ['Servicios y <br />actividades <br /> extra escolares']
      }]
    }, {
      elements: [{
        type: 'description',
        text: ['Estas actividades tienen una contribución importante al desarrollo personal <br /> de nuestros alumnos, completando e integrando de manera especial su <br />educación y formación. El objetivo principal es la enseñanza-aprendizaje a <br />través de metodologías más creativas y prácticas.']
      }, {
        type: 'description',
        text: ['Estas se ofrecen por las tardes de manera opcional según el gusto y preferencia <br /> de cada uno de nuestros alumnos. Cada inicio de ciclo escolar <br /> (agosto) se emite CONVOCATORIA donde se ofertan todas las opciones <br />disponibles, por ejemplo:']
      }]
    }]
  }
}
