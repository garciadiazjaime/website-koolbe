/* eslint max-len: [2, 500, 4] */
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
        text: ['Este servicio se ofrece para todos los niveles. ' +
          'El horario extendido contin&uacute;a el proceso formativo del alumno. ' +
          'No es guarder&iacute;a, sino apoyo educativo profesional; a las tareas, ' +
          'al descanso y los buenos h&aacute;bitos despu&eacute;s de los horarios de ' +
          'clases formales. En cuanto a los alimentos el padre de familia puede ' +
          'optar por solicitar el servicio en la cooperativa escolar ' +
          'de su plantel escolar o enviar la comida. De preferencia ' +
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
        text: ['Servicio con un costo adicional mensual y horarios espec&iacute;ficos. Consultar en el plantel donde este inscrito su hijo'],
        style: {
          fontSize: '18px',
          fontFamily: Constants.fontA,
        },
      }, {
        type: 'link',
        url: 'contacto',
        text: 'Cont&aacute;ctanos',
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
