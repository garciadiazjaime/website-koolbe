'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';



import Button2 from '../../elements/buttons/button2';

import Image7 from '../../elements/images/image7';
import Image8 from '../../elements/images/image8';
import Image9 from '../../elements/images/image9';
import Image10 from '../../elements/images/image10';

import List4 from '../../elements/lists/list4';

import Par1 from '../../elements/paragraphs/paragraph1';
import Par2 from '../../elements/paragraphs/paragraph2';
import Par4 from '../../elements/paragraphs/paragraph4';
import Par5 from '../../elements/paragraphs/paragraph5';

import Title8 from '../../elements/titles/title8';
import Title11 from '../../elements/titles/title11';
import Title12 from '../../elements/titles/title12';
import Title13 from '../../elements/titles/title13';
import Title14 from '../../elements/titles/title14';
import Title15 from '../../elements/titles/title15';
import Title16 from '../../elements/titles/title16';
import Title17 from '../../elements/titles/title17';
import Title18 from '../../elements/titles/title18';

import Wrapper2 from '../../elements/wrappers/wrapper2';
import Wrapper3 from '../../elements/wrappers/wrapper3';



export default class AboutUs extends Component {

  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Image7 />
            </div>          
          </div>
          <div className="row" style={{marginBottom: '50px'}}> 
            <div className="col-xs-12 col-sm-6">
              <Title11>
                El proyecto Kolbe
              </Title11>
              <div style={{marginBottom: '45px'}}>
                <Par1>
                  El Instituto Ramiro Kolbe surge de la inquietud  del Padre Jesús Quesada Martínez, de ayudar a los demás a través de la educación, ya que él cree firmemente en la idea de que la educación es la base de una sociedad en progreso inspirados en la filosofía de San Maximiliano Kobe – 
                </Par1>
              </div>
              <Par1>
                De esta manera y gracias a al apoyo de un grupo de inversionistas, inicia el reclutamiento de un muy valioso equipo docente y administrativo, así como el diseño y estructuración del Sistema Educativo y Editorial Kolbe (SISEEKO).
              </Par1>
            </div>
            <div className="col-xs-12 col-sm-6" style={{marginTop: '110px'}}>
              <Title8>
                “No olviden el amor, hay que educar a quienes puedan ayudar a los necesitados”. 
              </Title8>
            </div>
          </div>
        </div>
        <div style={{marginBottom: '77px'}}>
          <Wrapper2>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                  <Title12>
                    Visión
                  </Title12>
                  <Par4>
                    Desarrollamos en nuestro alumnado aptitudes de conocimiento académico, deportivo, artístico y cultural potenciando sus capacidades individuales.
                  </Par4>
                </div>
              </div>
            </div>
          </Wrapper2>
        </div>
        <div className="container">
          <div className="row" style={{marginBottom: '78px'}}>
            <div className="col-xs-12 col-sm-6">
              <Title13>
                Filosofía Religiosa
              </Title13>
              <Par2>
                La filosofía del instituto Kolbe se funda en el pensamiento de la antropología cristiana que tiene al hombre y a la mujer como centro y preocupación de toda su actividad.
              </Par2>
              <Title14>
                Confirmaciones y  Primeras Comuniones
              </Title14>
              <Par1>
                La preparación y celebración se lleva a cabo cada año con los alumnos cuyos padres así lo deseen.
              </Par1>
              <Par1>
                Para mayor información de horarios y costos comunicarse a las oficinas de cada plantel.
              </Par1>
              <div className="row" style={{marginTop: '45px'}}>
                <div className="col-xs-12 col-sm-6">
                  <Button2>
                    Contáctanos
                  </Button2>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Title14>
                Ideario
              </Title14>
              <List4>
                <li>La educación a favor del hombre y de la mujer creados a imagen y semejanza de Dios.</li>

                <li>La educación a favor de la cultura de la vida, de la cultura de la paz y de la cultura del bien común.</li>

                <li>La educación para el éxito, para la excelencia y para la eficiencia profesional.</li>

                <li>La educación con alto sentido de liderazgo social y servicio comunitario.</li>

                <li>La educación como gestora de una cultura de la solidaridad, la justicia social y la armonía social.</li>

                <li>La educación bajo la mística del servicio al marginado al estilo de San Maximiliano Kolbe.</li>

              </List4>
            </div>
          </div>
          <div className="row" style={{marginBottom: '180px'}}>
            <div className="col-xs-12 col-sm-6">
              <Image8/>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Title15>
                Somos Escuela BEO
              </Title15>
              <Title16>
                (British English Olympics)
              </Title16>
              <Par1>
                Certificación como escuela dentro del BEO BOARD. Cada año se llevan a cabo las Olimpiadas Británicas de Inglés en donde las escuelas más exclusivas del Reino Unido reciben a un grupo de estudiantes de todo el mundo se enfrentan a diferentes retos académicos en el idioma Inglés.
              </Par1>
              <Title17>
                Objetivos y ventjas
              </Title17>
              <List4>
                <li>Fortalece el aprendizaje integral para la excelencia en el uso del idioma inglés.</li>

                <li>Fomenta el conocimiento de diferentes culturas.</li>

                <li>Convivencia con personas de diferentes países, tradiciones y opiniones.</li>

                <li>Crecimiento personal.</li>

                <li>Vivir una experiencia única.</li>

              </List4>
            </div>
          </div>
        </div>
        <Wrapper3>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-sm-offset-1">
                <Image9 />
                <Title18>
                  Oración a<br />
                  San Maximiliano Kolbe
                </Title18>
                <Par5>
                  San Maximiliano Kolbe, Bendice el trabajo que estamos iniciando este nuevo día, bendice a nuestro padres, bendice su trabajo y cuídalos de toda enfermedad. Bendice a nuestros maestros y a toda su familia, bendice a nuestro instituto. Te ofrecemos este día de trabajo, te ofrecemos nuestras clases y nuestro recreo, te ofrecemos nuestras tareas, y nuestra convivencia con todos nuestros compañeros. Madre mía inmaculada, Que sea un buen estudiante, Que sea un buen hijo. Quiero ser obediente, respetuoso, Trabajador y un buen amigo para todos.<br/>
                    Amén.
                </Par5>
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-2">
                <Image10 />
                <Title18>
                  Himno <br />
                  del Instituto
                </Title18>
                <Par5>
                  Yo soy alumno del Kolbe<br />
                  Y lo grito con honor,<br />
                  porque  a diario doy la vida<br />
                  trabajando con amor.<br />
                  Tú, Maximiliano, mártir y santo,<br />
                  Nos inspiras y nos das valor.<br />
                  A luchar por la patria y por Dios<br />
                  En busca de un mundo mejor!<br />
                  Que canten los jóvenes Kolbe<br />
                  Al mundo donde hay odio y rencor,<br />
                  Y que su mensaje alivie<br />
                  El sufrimiento y dolor!<br />
                </Par5>
              </div>
            </div>
          </div>
        </Wrapper3>
      </div>
    );
  }
}
