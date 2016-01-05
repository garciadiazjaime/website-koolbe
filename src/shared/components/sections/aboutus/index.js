'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Title1 from '../../elements/titles/title1';
import Title2 from '../../elements/titles/title2';
import Title3 from '../../elements/titles/title3';
import Title4 from '../../elements/titles/title4';
import Par1 from '../../elements/paragraphs/paragraph1';
import List1 from '../../elements/lists/list1';
import List2 from '../../elements/lists/list2';
import List3 from '../../elements/lists/list3';
import Button1 from '../../elements/buttons/button1';
import Wrapper1 from '../../elements/wrappers/wrapper1';
import Wrapper1B from '../../elements/wrappers/wrapper1B';


export default class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <Title1>
              Requisitos de Admisión
            </Title1>
            <Title2>
              Proceso de admisión (inscripción)<br />
              para todos los niveles:
            </Title2>
            <List1>
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
          <div className="col-xs-12  col-sm-4" style={{marginBottom: '100px'}}>
              <Wrapper1>
                <Title3> 
                  Grados Escolares
                </Title3>
                <Par1>
                  Instituto Ramiro Kolbe, es una institución privada que ofrece a niños y adolescentes una fórmula educativa de excelente nivel respaldados el Sistema SISEEKO.
                </Par1>
              </ Wrapper1>
              <Button1 ref="/inscripcion">
                FICHA DE INSCRIPCIÓN
              </Button1>
              <Button1 ref="/uniforme">
                UNIFORME
              </Button1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            Aquí va una imágen.
          </div>
          <div className="col-xs-12 col-sm-6">
            <Wrapper1B>
              <Title4>
                Documentación
              </Title4>
              <List2>
                <li>Acta de nacimiento original y 3 copias.</li>

                <li>Constancia de estudios original y 3 copias.<br />
                (en caso de inscribir a 2º y 3º).</li>

                <li>Cartilla de vacunación original y 3 copias.<br />
                CURP original y 3 copias.</li>

                <li>Carta de no adeudo<br />
                (en caso de provenir de escuela particular).</li>
              </List2>
              <Title4>
                Requisitos de edad para ingresar a los niveles de preescolar
              </Title4>
              <List3>
                <li className="first"> 3 años cumplidos al 31 de diciembre del año en curso.</li>

                <li className="second"> 4 años cumplidos al 31 de diciembre del año en curso.</li>

                <li className="third"> 5 años cumplidos al 31 de diciembre del año en curso.</li>
              </List3>
            </Wrapper1B>
          </div>
        </div>
      </div>
    );
  }
}
