import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Constants from '../../../constants';
import Form from './form';


export default class ContactForm extends React.Component {

  render() {
    const anchorRed = {
      color: Constants.red,
      fontFamily: Constants.fontABold
    };

    return (<div className="row">
        <div className="col-sm-6">
          <p className={style.intro}>
            Para cualquier pregunta o comentario por favor llene la
            siguiente forma o contáctenos a través del correo <a href="mailto:mercadotecnia@irk.mx" alt="mailto:mercadotecnia@irk.mx" style={anchorRed}>mercadotecnia@irk.mx</a>
          </p>
        </div>
        <div className="col-sm-6">
          <Form />
        </div>
      </div>
    );
  }
}
