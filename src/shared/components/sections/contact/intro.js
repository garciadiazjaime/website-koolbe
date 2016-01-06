import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
// import Constants from '../../../constants';
// import SimpleCard from '../../widgets/card/simpleCard';
import Form from './form';
// import Activities from './activities';
// import Contact from './contact';
// import Schedule from './schedule';


export default class ContactForm extends React.Component {

  render() {

    return (<div className="row">
        <div className="col-sm-6">
          <p>
            Para cualquier pregunta o comentario por favor llene la <br />
            siguiente forma o contáctenos a través del correo <br />
            <a href="mailto:mercadotecnia@irk.mx" alt="mailto:mercadotecnia@irk.mx">mercadotecnia@irk.mx</a>
          </p>
        </div>
        <div className="col-sm-6">
          <Form />
        </div>
      </div>
    );
  }
}
