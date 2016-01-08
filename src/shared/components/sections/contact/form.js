import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import RestClient from '../../../../server/lib/rest-client';
var constants = require('../../../constants');

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: this.getInitialFormState(),
      requiredFields: this.getRequiredFields(this.getInitialFormState()),
      showLoading: false
    };

    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  render() {

    return (<form id="form" className={style.form + " form-horizontal"}>
        <div className="form-group">
          <label id="lab_name" className="col-sm-2 control-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" id="name" name="name" placeholder="" onChange={this.onChangeHandler} value={this.state.formData.name.value} />
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div className="form-group">
          <label id="lab_email" className="col-sm-2 control-label">Correo</label>
          <div className="col-sm-10">
            <input type="text" id="email" name="email" placeholder="" onChange={this.onChangeHandler} value={this.state.formData.email.value}/>
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div className="form-group">
          <label id="lab_tel" className="col-sm-2 control-label">Teléfono</label>
          <div className="col-sm-10">
            <input type="tel" id="tel" name="tel" placeholder="" onChange={this.onChangeHandler} value={this.state.formData.tel.value}/>
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div className="form-group">
          <label id="lab_message" className="col-sm-2 control-label">Mensaje</label>
          <div className="col-sm-10">
            <textarea id="message" name="message" className="form-control" onChange={this.onChangeHandler} value={this.state.formData.message.value}></textarea>
          </div>
          <div className={style.borderBottom}></div>
        </div>

        <div><span id="msg"></span></div>
        <div>{ this.state.showLoading ? <span className={style.loader}>Cargando</span> : null }</div>
        <div className="pull-right">
          <button onClick={this.submitFormHandler}>Enviar</button>
        </div>
      </form>
    );
  }

  getInitialFormState() {
    return {
      name: {
        title: 'Nombre',
        value: '',
        require: true
      },
      email: {
        title: 'Correo',
        value: '',
        require: true
      },
      tel: {
        title: 'Teléfono',
        value: '',
        require: true
      },
      message: {
        title: 'Mensaje',
        value: '',
        require: true
      }
    };
  }

  onChangeHandler(event) {
    var formData = this.state.formData;
    formData[event.target.name].value = event.target.value;
    this.setState({
      formData: formData
    });
  }

  /*
  Handler function to validate form and send data
  */
  submitFormHandler(event) {
    event.preventDefault();
    var formData = this.state.formData;
    var isFormValid = this.validateForm(formData, this.state.requiredFields);
    var msgElement = $('#msg');
    msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);

    if(isFormValid) {
      this.setState({
        showLoading: true
      });

      var _this = this;
      var html = this.getHTMLMessage(formData);
      var data = {
        fromname: formData.name.value,
        replyto: formData.email.value,
        subject: constants.emailSubject,
        html: html
      };

      RestClient({
        path: '/api/send_email',
        method: 'POST',
        entity: data
      }).then(function(response) {
        var state = {
          showLoading: false
        };
        if(response.entity.status){
          state['formData'] = _this.getInitialFormState();
        }
        _this.setState(state);
        msgElement.addClass(response.entity.status ? style.successCSSClass :style.errorCSSClass);
        msgElement.html(response.entity.status ?
        'Información enviada de manera exitosa, gracias.':
        'Lo sentimos, favor de intentar más tarde.');
      });
    }else{
      msgElement.addClass(style.errorCSSClass);
    }
    msgElement.html(!isFormValid ? 'Favor de llenar los campos en rojo.' : '');
  }

  getRequiredFields(data) {
    var response = [];
    for(var property in data){
      if(data[property].require){
        response.push(property);
      }
    }
    return response;
  }

  validateForm(data, requiredFields) {
    var response = true;
    for(var i = 0, len = requiredFields.length; i<len; i++) {
      var property = requiredFields[i];
      var labelElement = $('#lab_' + property);
      if( !data.hasOwnProperty(property) || !data[property].value.length){
        if(response){
          response = false;
        }
        labelElement.addClass(style.errorCSSClass);
      }
      else{
        labelElement.removeClass(style.errorCSSClass);
      }
    }
    return response;
  }

  getHTMLMessage(data) {
    var response = '';
    for(var property in data){
      response += data[property].title + ': ' + data[property].value + '<br />'
    }
    return response;
  }
}
