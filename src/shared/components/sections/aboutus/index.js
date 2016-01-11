'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

import Button1 from '../../elements/buttons/button1';
import Button2 from '../../elements/buttons/button2';

import Hr1 from '../../elements/misc/hr1';

import ImageInsert from '../../elements/images/image';

import List1 from '../../elements/lists/list1'; 

import Par1 from '../../elements/paragraphs/paragraph1';

import Title1 from '../../elements/titles/title1';
import Title2 from '../../elements/titles/title2';

import Wrapper1 from '../../elements/wrappers/wrapper1';


export default class AboutUs extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className={"col-xs-4 " + style.colNopad}>
              <Button2 refs="plantelSantaFe" classTitle="blue">
                Santa Fé
              </Button2>
            </div>
            <div className={"col-xs-4 " + style.colNopad}>
              <Button2 refs="plantelOtay"  classTitle="red">
                Otay
              </Button2>
            </div>
            <div className={"col-xs-4 " +   style.colNopad}>
              <Button2  refs="plantelPresidentes"  classTitle="green">
                Presidentes
              </Button2>
            </div>
          </div>
        </div>
        <Wrapper1 className="wrapper3">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4" style={{paddingLeft: '50px'}}>
                <Title2 className="title1">
                  Santa Fé
                </Title2>
                <Par1 classTitle="par3">
                  (664) 975 2237 y 68
                </Par1>
                <Title1 className="title9">
                  Niveles escolares
                </Title1>
                <div style={{ marginBottom: '35px' }}>
                  <Button1 refs="preescolar" classTitle="button3">
                    Preescolar |&nbsp;
                  </Button1>
                  <Button1 refs="primaria" classTitle="button3">
                    Primaria |&nbsp;
                  </Button1>
                  <br />
                  <Button1 refs="secundaria" classTitle="button3">
                    Secundaria |&nbsp;
                  </Button1>
                  <Button1 refs="preparatoria" classTitle="button3">
                    Preparatoria
                  </Button1>
                </div>
                <div className="row">
                  <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
                    <Button1  refs="contact" classTitle="button4">
                      Contáctanos
                    </Button1>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-8">
                <ImageInsert url="images/aboutus/plantelBlue.jpg" classTitle='image1'/>
              </div>
            </div>
          </div>
        </Wrapper1>
        <div className={"container " +  style.sidePadded50}>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <Title1 className="title1">
                Requisitos de Admisión
              </Title1>
              <Title1 className="title2">
                Proceso de admisión (inscripción)<br />
                para todos los niveles:
              </Title1>
              <List1 classTitle="list1">
                <li>Ficha de inscripción debidamente llena.</li>
                <li>Entrevista con Dirección Académica.</li>
                <li>Cuestionario del departamento de Psicología debidamente lleno.</li>
                <li>Entrevista con departamento de Psicología, solo en caso de ser necesario.</li>
                <li>Realizar examen diagnóstico.</li>
                <li>Entregar documentación completa del alumno solicitado por departamento
                de Control Escolar.</li>
                <li>Realizar pago por concepto de Inscripción/Reinscripción.</li>
              </List1>
            </div>
            <div className="col-xs-12  col-sm-4" style={{ marginBottom: '100px' }}>
                <Wrapper1 className="wrapper1">
                  <Title1 className="title3">
                    Grados Escolares
                  </Title1>
                  <Par1 classTitle="par1">
                    Instituto Ramiro Kolbe, es una institución privada que ofrece a niños y
                    adolescentes una fórmula educativa de excelente nivel respaldados
                    el Sistema SISEEKO.
                  </Par1>
                </ Wrapper1>
                <Button1 refs="inscripcion" classTitle="button1">
                  FICHA DE INSCRIPCIÓN
                </Button1>
                <Button1 refs="uniforme" classTitle="button1">
                  UNIFORME
                </Button1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <ImageInsert url="images/aboutus/inscripcion_preescolar.jpg" classTitle="image1"/>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Wrapper1 className="wrapper2">
                <Title1 className="title4">
                  Documentación
                </Title1>
                <List1 classTitle="list2">
                  <li>Acta de nacimiento original y 3 copias.</li>

                  <li>Constancia de estudios original y 3 copias.<br />
                  (en caso de inscribir a 2º y 3º).</li>

                  <li>Cartilla de vacunación original y 3 copias.<br />
                  CURP original y 3 copias.</li>

                  <li>Carta de no adeudo<br />
                  (en caso de provenir de escuela particular).</li>
                </List1>
                <Title1 className="title4">
                  Requisitos de edad para ingresar a los niveles de preescolar
                </Title1>
                <List1 classTitle="list3">
                  <li className="first"> 3 años cumplidos al 31 de diciembre del año en curso.</li>

                  <li> 4 años cumplidos al 31 de diciembre del año en curso.</li>

                  <li className="third"> 5 años cumplidos al 31 de diciembre del año en curso.</li>
                </List1>
              </Wrapper1>
            </div>
          </div>

          <Hr1 className="hr2" />

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <ImageInsert url="images/aboutus/inscripcion_primaria.jpg" classTitle="image1" />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Wrapper1 className="wrapper2">
                <Title1 className="title4">
                  Documentación
                </Title1>
                <List1 classTitle="list2">
                  <li>Acta de nacimiento original y 3 copias.</li>

                  <li>Última boleta de calificaciones o constancia de la escuela donde
                  estudia actualmente, original y 3 copias.</li>

                  <li>Certificado de preescolar original y 3 copias<br />
                  (en caso de inscribir a 1º).</li>

                  <li>CURP original y 3 copias.</li>

                  <li>Cartilla de vacunación original y 3 copias<br />
                  (en caso de inscribir a 1º).</li>

                  <li>Formato SUI (en caso de inscribir a 1º).</li>

                  <li>Carta de no adeudo <br />
                  (en caso de provenir de escuela particular).</li>

                  <li>Carta de buena conducta.</li>

                  <li>Constancia de calificaciones <br />
                  (Aplica sólo en caso de traslado avanzado el ciclo escolar).</li>
                </List1>
                <Title1 className="title4">
                  Requisitos de edad para ingresar a los niveles de preescolar
                </Title1>
                <List1 classTitle="list3">
                  <li className="first"> 6 años cumplidos al 31 de diciembre
                  (con certificado de preescolar)</li>
                </List1>
              </Wrapper1>
            </div>
          </div>

          <Hr1 className="hr2" />

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <ImageInsert url="images/aboutus/inscripcion_secundaria.jpg" classTitle="image1" />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Wrapper1 className="wrapper2">
                <Title1 className="title4">
                  Documentación
                </Title1>
                <List1 classTitle="list2">
                  <li>Acta de nacimiento original y 3 copias.</li>

                  <li>Última boleta de calificaciones o constancia de la escuela
                  donde estudia actualmente, original y 3 copias.</li>

                  <li>Certificado de primaria<br />
                  (en caso de inscribir a 1º) original y 3 copias.</li>

                  <li>CURP original y 3 copias.</li>

                  <li>Formato SUI (en caso de inscribir a 1º).</li>

                  <li>Carta de no adeudo<br />
                  (en caso de provenir de escuela particular).</li>

                  <li>Carta de buena conducta.</li>

                  <li>Revalidación USA.</li>

                  <li>Folio de traslado.</li>

                </List1>
                <Title1 className="title5">
                  Sin constancia del grado anterior, el alumno no se puede inscribir
                </Title1>
              </Wrapper1>
            </div>
          </div>
          
          <Hr1 className="hr2" /> 

          <div className={"row " + style.bottom20}>
            <div className="col-xs-12 col-sm-6">
              <Title1 className="title6">
                Horarios de Atención
              </Title1>
              <Par1 classTitle="par2">
                Estamos disponibles para atenderle de manera personal en cada uno de los planteles.
              </Par1>
              <Par1 classTitle="par2">
                Lunes a Viernes de 7:00 am a 3:00 pm.
              </Par1>
              <Hr1 />
              <Par1 classTitle="par2">
                Horarios de caja de 7:00 am a 2:00 pm.
              </Par1>
              
            </div>
            <div className="col-xs-12 col-sm-6">
              <Title1 className="title7">
                El proyecto
              </Title1>
              <ImageInsert url="images/aboutus/inscripcion_pie.jpg" classTitle='image2'/>
              <Title1 className="title8">
                Método Académico
              </Title1>
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                  <Button1 refs="contact" classTitle="button2">
                    Conoce más
                  </Button1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
