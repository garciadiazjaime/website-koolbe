import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import Constants from '../../../constants';
import Form from './form';


export default class ContactForm extends React.Component {

  render() {
    const anchorRed = {
      color: Constants.red,
      fontFamily: Constants.fontABold,
    };
    const mailTo = 'mercadotecnia@irk.mx';

    return (<div className="row">
        <div className="col-sm-6">
          <p className={style.intro}>
            Para cualquier pregunta o comentario por favor llene la
            siguiente forma o cont&aacute;ctenos a través del
            correo <a href={ 'mailto:' + mailTo } alt={ 'mailto:' + mailTo } style={anchorRed}>
              { mailTo }
            </a>
          </p>
        </div>
        <div className="col-sm-6">
          <Form />
        </div>
      </div>
    );
  }
}
