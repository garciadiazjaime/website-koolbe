import React, { Component } from 'react';

import Button1 from '../../elements/buttons/button1';
import Button2 from '../../elements/buttons/button2';
import Button3 from '../../elements/buttons/button3';
import Button4 from '../../elements/buttons/button4';
import Button5 from '../../elements/buttons/button5';
import Button6 from '../../elements/buttons/button6';
import Button7 from '../../elements/buttons/button7';

import Hr1 from '../../elements/misc/hr1';

import Image1 from '../../elements/images/image1';
import Image2 from '../../elements/images/image2';
import Image3 from '../../elements/images/image3';
import Image5 from '../../elements/images/image5';
import Image6 from '../../elements/images/image6';

import List1 from '../../elements/lists/list1';
import List2 from '../../elements/lists/list2';
import List3 from '../../elements/lists/list3';

import Par1 from '../../elements/paragraphs/paragraph1';
import Par2 from '../../elements/paragraphs/paragraph2';
import Par3 from '../../elements/paragraphs/paragraph3';

import Title1 from '../../elements/titles/title1';
import Title2 from '../../elements/titles/title2';
import Title3 from '../../elements/titles/title3';
import Title4 from '../../elements/titles/title4';
import Title5 from '../../elements/titles/title5';
import Title6 from '../../elements/titles/title6';
import Title7 from '../../elements/titles/title7';
import Title8 from '../../elements/titles/title8';
import Title9 from '../../elements/titles/title9';
import Title10 from '../../elements/titles/title10';

import Wrapper1 from '../../elements/wrappers/wrapper1';
import Wrapper1B from '../../elements/wrappers/wrapper1B';
import Wrapper2 from '../../elements/wrappers/wrapper2';


export default class AboutUs extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4" style={{ paddingRight: '0' }}>
              <Button3>
                Santa Fé
              </Button3>
            </div>
            <div className="col-xs-12 col-sm-4" style={{ paddingRight: '0', paddingLeft: '0' }}>
              <Button4>
                Otay
              </Button4>
            </div>
            <div className="col-xs-12 col-sm-4" style={{ paddingLeft: '0' }}>
              <Button5>
                Presidentes
              </Button5>
            </div>
          </div>
        </div>
        <Wrapper2>
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-4">
                <Title9>
                  Santa Fé
                </Title9>
                <Par3>
                  (664) 975 2237 y 68
                </Par3>
                <Title10>
                  Niveles escolares
                </Title10>
                <div style={{ marginBottom: '35px' }}>
                  <Button6>
                    Preescolar |&nbsp;
                  </Button6>
                  <Button6>
                    Primaria |&nbsp;
                  </Button6>
                  <br />
                  <Button6>
                    Secundaria |&nbsp;
                  </Button6>
                  <Button6>
                    Preparatoria
                  </Button6>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <Button7>
                      Contáctanos
                    </Button7>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-8">
                <Image6 />
              </div>
            </div>
          </div>
        </Wrapper2>
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
            <div className="col-xs-12  col-sm-4" style={{ marginBottom: '100px' }}>
                <Wrapper1>
                  <Title3>
                    Grados Escolares
                  </Title3>
                  <Par1>
                    Instituto Ramiro Kolbe, es una institución privada que ofrece a niños y
                    adolescentes una fórmula educativa de excelente nivel respaldados el
                    Sistema SISEEKO.
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
              <Image1 />
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

                  <li> 4 años cumplidos al 31 de diciembre del año en curso.</li>

                  <li className="third"> 5 años cumplidos al 31 de diciembre del año en curso.</li>
                </List3>
              </Wrapper1B>
            </div>
          </div>


          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <Image2 />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Wrapper1B>
                <Title4>
                  Documentación
                </Title4>
                <List2>
                  <li>Acta de nacimiento original y 3 copias.</li>

                  <li>
                    Última boleta de calificaciones o constancia de la escuela donde estudia
                    actualmente, original y 3 copias.
                  </li>

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
                </List2>
                <Title4>
                  Requisitos de edad para ingresar a los niveles de preescolar
                </Title4>
                <List3>
                  <li className="first"> 6 años cumplidos al 31 de diciembre
                    (con certificado de preescolar)</li>
                </List3>
              </Wrapper1B>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <Image3 />
            </div>
            <div className="col-xs-12 col-sm-6">
              <Wrapper1B>
                <Title4>
                  Documentación
                </Title4>
                <List2>
                  <li>Acta de nacimiento original y 3 copias.</li>

                  <li>Última boleta de calificaciones o constancia de la escuela donde
                    estudia actualmente, original y 3 copias.</li>

                  <li>Certificado de primaria<br />
                  (en caso de inscribir a 1º) original y 3 copias.</li>

                  <li>CURP original y 3 copias.</li>

                  <li>Formato SUI (en caso de inscribir a 1º).</li>

                  <li>Carta de no adeudo<br />
                  (en caso de provenir de escuela particular).</li>

                  <li>Carta de buena conducta.</li>

                  <li>Revalidación USA.</li>

                  <li>Folio de traslado.</li>

                </List2>
                <Title5>
                  Sin constancia del grado anterior, el alumno no se puede inscribir
                </Title5>
              </Wrapper1B>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Title6>
                  Horarios de Atención
                </Title6>
                <Par2>
                  Estamos disponibles para atenderle de manera personal en cada uno
                  de los planteles.
                </Par2>
                <Par2>
                  Lunes a Viernes de 7:00 am a 3:00 pm.
                </Par2>
                <Hr1 />
                <Par2>
                  Horarios de caja de 7:00 am a 2:00 pm.
                </Par2>

              </div>
              <div className="col-xs-12 col-sm-6">
                <Title7>
                  El proyecto
                </Title7>
                <Image5 />
                <Title8>
                  Método Académico
                </Title8>
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2">
                    <Button2 ref="/contact">
                      Conoce más
                    </Button2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
