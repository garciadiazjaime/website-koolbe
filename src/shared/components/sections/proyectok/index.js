'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';



import Button2 from '../../elements/buttons/button2';

import Image7 from '../../elements/images/image7';

import List4 from '../../elements/lists/list4';

import Par1 from '../../elements/paragraphs/paragraph1';
import Par2 from '../../elements/paragraphs/paragraph2';
import Par4 from '../../elements/paragraphs/paragraph4';

import Title8 from '../../elements/titles/title8';
import Title11 from '../../elements/titles/title11';
import Title12 from '../../elements/titles/title12';
import Title13 from '../../elements/titles/title13';
import Title14 from '../../elements/titles/title14';

import Wrapper2 from '../../elements/wrappers/wrapper2';


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
        </div>
      </div>
    );
  }
}
