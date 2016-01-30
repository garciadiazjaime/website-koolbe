import React from 'react';

import SimpleCard from '../../widgets/card/simpleCard';


export default class Activities extends React.Component {

  getCards() {
    return [{
      elements: [{
        type: 'description',
        text: ['*Los grupos se abren seg&uacute;n la demanda que haya de los <br />' +
        'mismos, siendo el m&iacute;nimo de 8 a 10 alumnos seg&uacute;n la <br /> actividad. ' +
        'Estas tienen un costo adicional mensual y <br />horarios espec&iacute;ficos.'],
      }],
    }, {
      elements: [{
        type: 'link',
        url: 'contacto',
        text: 'Cont&aacute;ctanos',
      }],
    }];
  }

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
}
