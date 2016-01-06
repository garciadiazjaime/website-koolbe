import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Intro from './intro';


export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: this.getInitialFormState(),
      requiredFields: this.getRequiredFields(this.getInitialFormState()),
      showLoading: false,
      errorCSSClass: 'text-error',
      successCSSClass: 'text-success'
    };
  }

  render() {

    return (<form id="form" className="navbar-form">
        <div className="form-inline">
          <label id="lab_name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="" onChange={this.onChangeHandler.bind(this, 'name')} value={this.state.formData.name.value} />
        </div>
        <div className="form-inline">
            <label id="lab_email">Correo</label>
            <input type="text" id="email" name="email" placeholder="" onChange={this.onChangeHandler.bind(this, 'email')} value={this.state.formData.email.value}/>
        </div>
        <div className="form-inline">
            <label id="lab_tel">Teléfono</label>
            <input type="tel" id="tel" name="tel" placeholder="" onChange={this.onChangeHandler.bind(this, 'tel')} value={this.state.formData.tel.value}/>
        </div>
        <div className="form-inline">
          <label id="lab_message">Mensaje</label>
          <textarea id="message" name="message" placeholder="" onChange={this.onChangeHandler.bind(this, 'message')} value={this.state.formData.message.value}></textarea>
        </div>
        <div className="form-inline">
          <span id="msg"></span>
        </div>
        <div>
          { this.state.showLoading ? <span id="loader">Cargando</span> : null }
        </div>
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
      company: {
        title: 'Empresa',
        value: ''
      },
      tel: {
        title: 'Teléfono',
        value: '',
        require: true
      },
      message: {
        title: 'Mensaje',
        value: ''
      }
    };
  }

  onChangeHandler() {
    var formData = this.state.formData;
    formData[property].value = event.target.value;

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
    var msgElement = document.getElementById('msg');

    if(isFormValid){
    this.setState({
    showLoading: false
    });

    var _this = this;
    var html = this.getHTMLMessage(formData);
    var data = {
    fromname: formData.name.value,
    replyto: formData.email.value,
    subject: 'Forma de Contacto Web',
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
    msgElement.className = response.entity.status ? _this.state.successCSSClass : _this.state.errorCSSClass;
    msgElement.innerHTML = response.entity.status ?
    'Your information has been sent successfully, thanks.':
    'We are sorry, something went wrong, please try later.';
    });
    }else{
    msgElement.className = this.state.errorCSSClass;
    }
    msgElement.innerHTML = !isFormValid ? 'Please fill in fields on red' : '';
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
    for(var i=0; i<requiredFields.length; i++){
    var property = requiredFields[i];
    var labelElement = document.getElementById('lab_' + property);
    if( !data.hasOwnProperty(property) || !data[property].value.length){
    if(response){
    response = false;
    }
    labelElement.className = this.state.errorCSSClass;
    }
    else{
    labelElement.className = '';
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

// var ContactForm = React.createClass({
//
//     getInitialState: function(){
//         return {
//             formData: this.getInitialFormState(),
//             requiredFields: this.getRequiredFields(this.getInitialFormState()),
//             showLoading: false,
//             errorCSSClass: 'text-error',
//             successCSSClass: 'text-success'
//         };
//     },
//
//     render: function() {
//
//         return (
//             <form id="form">
//                 <h2>Drop Us a Line</h2>
//                 <p>Feel free to reach out to us with any questions.</p>
//                 <div className="formGroup">
//                     <label id="lab_name">Name*</label>
//                     <input type="text" id="name" name="name" placeholder="Name" onChange={this.onChangeHandler.bind(this, 'name')} value={this.state.formData.name.value}/>
//                 </div>
//                 <div className="formGroup">
//                     <label id="lab_email">Email*</label>
//                     <input type="text" id="email" name="email" placeholder="Email" onChange={this.onChangeHandler.bind(this, 'email')} value={this.state.formData.email.value}/>
//                 </div>
//                 <div className="formGroup">
//                     <label id="lab_tel">Phone*</label>
//                     <input type="tel" id="tel" name="tel" placeholder="Phone" onChange={this.onChangeHandler.bind(this, 'tel')} value={this.state.formData.tel.value}/>
//                 </div>
//                 <textarea id="message" name="message" placeholder="Message" onChange={this.onChangeHandler.bind(this, 'message')} value={this.state.formData.message.value}></textarea>
//                 <span id="msg"></span>
//
//                 { this.state.showLoading ? <span id="loader">Cargando</span> : null }
//
//                 <button id="submitButton" onClick={this.submitFormHandler}><span>Send</span></button>
//             </form>
//         )
//     },
//
//     onChangeHandler: function(property, event){
//         var formData = this.state.formData;
//         formData[property].value = event.target.value;
//
//         this.setState({
//             formData: formData
//         });
//     },
//
//     /*
//         Handler function to validate form and send data
//     */
//     submitFormHandler: function(event){
//         event.preventDefault();
//         var formData = this.state.formData;
//         var isFormValid = this.validateForm(formData, this.state.requiredFields);
//         var msgElement = document.getElementById('msg');
//
//         if(isFormValid){
//             this.setState({
//                 showLoading: false
//             });
//
//             var _this = this;
//             var html = this.getHTMLMessage(formData);
//             var data = {
//                 fromname: formData.name.value,
//                 replyto: formData.email.value,
//                 subject: 'Forma de Contacto Web',
//                 html: html
//             };
//
//             RestClient({
//                 path: '/api/send_email',
//                 method: 'POST',
//                 entity: data
//             }).then(function(response) {
//                 var state = {
//                     showLoading: false
//                 };
//                 if(response.entity.status){
//                     state['formData'] = _this.getInitialFormState();
//                 }
//                 _this.setState(state);
//                 msgElement.className = response.entity.status ? _this.state.successCSSClass : _this.state.errorCSSClass;
//                 msgElement.innerHTML = response.entity.status ?
//                     'Your information has been sent successfully, thanks.':
//                     'We are sorry, something went wrong, please try later.';
//             });
//         }else{
//             msgElement.className = this.state.errorCSSClass;
//         }
//         msgElement.innerHTML = !isFormValid ? 'Please fill in fields on red' : '';
//     },
//
//     getRequiredFields: function(data){
//         var response = [];
//         for(var property in data){
//             if(data[property].require){
//                 response.push(property);
//             }
//         }
//         return response;
//     },
//
//     validateForm: function(data, requiredFields){
//         var response = true;
//         for(var i=0; i<requiredFields.length; i++){
//             var property = requiredFields[i];
//             var labelElement = document.getElementById('lab_' + property);
//             if( !data.hasOwnProperty(property) || !data[property].value.length){
//                 if(response){
//                     response = false;
//                 }
//                 labelElement.className = this.state.errorCSSClass;
//             }
//             else{
//                 labelElement.className = '';
//             }
//         }
//         return response;
//     },
//
//     getHTMLMessage: function(data){
//         var response = '';
//         for(var property in data){
//             response += data[property].title + ': ' + data[property].value + '<br />'
//         }
//         return response;
//     },
//
//     getInitialFormState: function(){
//         return {
//             name: {
//                 title: 'Nombre',
//                 value: '',
//                 require: true
//             },
//             email:{
//                 title: 'Correo',
//                 value: '',
//                 require: true
//             },
//             company:{
//                 title: 'Empresa',
//                 value: ''
//             },
//             tel: {
//                 title: 'Teléfono',
//                 value: '',
//                 require: true
//             },
//             message: {
//                 title: 'Mensaje',
//                 value: ''
//             }
//         };
//     }
// });
//
// module.exports = ContactForm;
