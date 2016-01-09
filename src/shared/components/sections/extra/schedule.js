import React from 'react';
import _ from 'lodash';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import SimpleCard from '../../widgets/card/simpleCard';
import Sprites from '../../../sprite';
import Constants from '../../../constants';

export default class Schedule extends React.Component {

  getCards() {
    return [{
      elements: [{
        type: 'sprite',
        style: _.merge({}, Sprites.Extra.HorarioExtendido),
        className: 'img-responsive',
      }],
    }, {
      elements: [{
        type: 'title',
        text: ['Horario Extendido'],
      }, {
        type: 'description',
        text: ['Este servicio se ofrece para todos los niveles. <br />' +
          'El horario extendido continúa el proceso formativo del <br />alumno. ' +
          'No es guardería, sino apoyo educativo profesional;<br /> a las tareas, ' +
          'al descanso y los buenos hábitos <br /> después de los horarios de ' +
          'clases formales. En  <br />cuanto a los alimentos el padre de familia puede <br />' +
          'optar por solicitar el servicio en la cooperativa escolar <br />' +
          'de su plantel escolar o enviar la comida. De preferencia <br /> ' +
          'cambio de ropa para el alumno.<br /><br />'],
      }, {
        type: 'description',
        text: ['Horario: de 1:30 p.m. a 6:00 p.m.'],
        style: {
          fontSize: '18px',
          fontFamily: Constants.fontA,
        },
      }, {
        type: 'description',
        text: ['Costo: <span>$570.00 m.n. por mes.</span>'],
        style: {
          fontSize: '18px',
          fontFamily: Constants.fontA,
        },
      }, {
        type: 'link',
        url: 'contactanos',
        text: 'Contáctanos',
      }],
    }];
  }

  render() {
    const cards = this.getCards();

    return (<div className="row">
        <div className="col-sm-6">
          <SimpleCard data={cards[0]} />
        </div>
        <div className="col-sm-6">
          <div className={style.scheduleInfo}>
            <SimpleCard data={cards[1]} />
          </div>
        </div>
      </div>
    );
  }
}
