import React from 'react';

import SimpleCard from '../../widgets/card/simpleCard';


export default class ExtraescolaresSection extends React.Component {

  getCards() {
    return [{
      elements: [{
        type: 'subtitle',
        text: ['Servicios y <br />actividades <br /> extra escolares'],
      }],
    }, {
      elements: [{
        type: 'description',
        text: ['Estas actividades tienen una contribución importante al desarrollo ' +
        'personal de nuestros alumnos, completando e integrando de manera especial ' +
        'su educación y formación. El objetivo principal es la enseñanza-aprendizaje a ' +
        'través de metodologías más creativas y prácticas.'],
      }, {
        type: 'description',
        text: ['Estas se ofrecen por las tardes de manera opcional según el gusto y ' +
        'preferencia de cada uno de nuestros alumnos. Cada inicio de ciclo escolar ' +
        '(agosto) se emite CONVOCATORIA donde se ofertan todas las opciones ' +
        'disponibles, por ejemplo:'],
      }],
    }];
  }

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
}
