import React, { Component } from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

import Button1 from '../../elements/buttons/button1';

import ImageInsert from '../../elements/images/image';

import List1 from '../../elements/lists/list1';

import Par1 from '../../elements/paragraphs/paragraph1';

import Title1 from '../../elements/titles/title1';

import Wrapper1 from '../../elements/wrappers/wrapper1';


export default class AboutUs extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ImageInsert url="images/proyectok/banner.jpg" classTitle="image3" />
            </div>
          </div>

          <div className="row" style={{ marginBottom: '50px' }}>
            <div className="col-xs-12 col-sm-5 col-sm-offset-1">
              <Title1 className="title10">
                El proyecto Kolbe
              </Title1>
              <div style={{ marginBottom: '45px' }}>
                <Par1 classTitle="par2">
                  El Instituto Ramiro Kolbe surge de la inquietud  del Padre
                  Jesús Quesada Martínez, de ayudar a los demás a través de la educación,
                  ya que él cree firmemente en la idea de que la educación es la base de
                  una sociedad en progreso inspirados en la filosofía de San Maximiliano Kobe –
                </Par1>
              </div>
              <Par1 classTitle="par2">
                De esta manera y gracias a al apoyo de un grupo de inversionistas, inicia el
                reclutamiento de un muy valioso equipo docente y administrativo, así como
                el diseño y estructuración del Sistema Educativo y Editorial Kolbe (SISEEKO).
              </Par1>
            </div>
            <div className={'col-xs-12 col-sm-5 ' + style.vAligner }>
              <Title1 className="title8">
                “No olviden el amor, hay que educar a quienes puedan ayudar a los necesitados”.
              </Title1>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '77px' }}>
          <Wrapper1 className="wrapper3">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                  <Title1 className="title11">
                    Visión
                  </Title1>
                  <Par1 classTitle="par4">
                    Desarrollamos en nuestro alumnado aptitudes de conocimiento académico,
                    deportivo, artístico y cultural potenciando sus capacidades individuales.
                  </Par1>
                </div>
              </div>
            </div>
          </Wrapper1>
        </div>
        <div className="container">
          <div className="row" style={{ marginBottom: '78px' }}>
            <div className="col-xs-12 col-sm-6">
              <Title1 className="title12">
                Filosofía Religiosa
              </Title1>
              <Par1 classTitle="par2">
                La filosofía del instituto Kolbe se funda en el pensamiento de la antropología
                cristiana que tiene al hombre y a la mujer como centro y preocupación
                de toda su actividad.
              </Par1>
              <Title1 className="title13">
                Confirmaciones y  Primeras Comuniones
              </Title1>
              <Par1 classTitle="par1">
                La preparación y celebración se lleva a cabo cada año con los alumnos
                cuyos padres así lo deseen.
              </Par1>
              <Par1 classTitle="par1">
                Para mayor información de horarios y costos comunicarse a las oficinas
                de cada plantel.
              </Par1>
              <div className="row" style={{ marginTop: '45px' }}>
                <div className="col-xs-12 col-sm-7">
                  <Button1 refs="contact" classTitle="button2">
                    Contáctanos
                  </Button1>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Title1 className="title12">
                Ideario
              </Title1>
              <List1 classTitle="list4">
                <li>La educación a favor del hombre y de la mujer creados a imagen y
                semejanza de Dios.</li>

                <li>La educación a favor de la cultura de la vida, de la cultura de la paz y
                de la cultura del bien común.</li>

                <li>La educación para el éxito, para la excelencia y para la eficiencia
                profesional.</li>

                <li>La educación con alto sentido de liderazgo social y servicio comunitario.</li>

                <li>La educación como gestora de una cultura de la solidaridad, la
                justicia social y la armonía social.</li>

                <li>La educación bajo la mística del servicio al marginado al estilo
                de San Maximiliano Kolbe.</li>

              </List1>
            </div>
          </div>
          <div className={'row ' + style.bottom180} >
            <div className="col-xs-12 col-sm-6">
              <ImageInsert url="images/proyectok/slider/slide1.jpg" classTitle={'image1'}/>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Title1 className="title14">
                Somos Escuela BEO
              </Title1>
              <Title1 className="title15">
                (British English Olympics)
              </Title1>
              <Par1 classTitle="par1">
                Certificación como escuela dentro del BEO BOARD. Cada año se llevan a cabo las
                Olimpiadas Británicas de Inglés en donde las escuelas más exclusivas del
                Reino Unido reciben a un grupo de estudiantes de todo el mundo se
                enfrentan a diferentes retos académicos en el idioma Inglés.
              </Par1>
              <Title1 className="title16">
                Objetivos y ventjas
              </Title1>
              <List1 classTitle="list4">
                <li>Fortalece el aprendizaje integral para la excelencia en el uso
                del idioma inglés.</li>

                <li>Fomenta el conocimiento de diferentes culturas.</li>

                <li>Convivencia con personas de diferentes países, tradiciones y opiniones.</li>

                <li>Crecimiento personal.</li>

                <li>Vivir una experiencia única.</li>

              </List1>
            </div>
          </div>
        </div>
        <Wrapper1 className="wrapper4">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-sm-offset-1">
                <ImageInsert url="images/proyectok/mrkolbe.png" classTitle={'image4'}/>
                <Title1 className="title17">
                  Oración a<br />
                  San Maximiliano Kolbe
                </Title1>
                <Par1 classTitle="par5">
                  San Maximiliano Kolbe, Bendice el trabajo que estamos iniciando este
                  nuevo día, bendice a nuestro padres, bendice su trabajo y cuídalos de
                  toda enfermedad. Bendice a nuestros maestros y a toda su familia,
                  bendice a nuestro instituto. Te ofrecemos este día de trabajo,
                  te ofrecemos nuestras clases y nuestro recreo, te ofrecemos nuestras tareas,
                  y nuestra convivencia con todos nuestros compañeros. Madre mía inmaculada,
                  Que sea un buen estudiante, Que sea un buen hijo. Quiero ser obediente,
                  respetuoso, Trabajador y un buen amigo para todos.<br/>
                    Amén.
                </Par1>
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-2">
                <ImageInsert url="images/proyectok/escudo.png" classTitle={'image4'}/>
                <Title1 className="title17">
                  Himno <br />
                  del Instituto
                </Title1>
                <Par1 classTitle="par5">
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
                </Par1>
              </div>
            </div>
          </div>
        </Wrapper1>
      </div>
    );
  }
}
