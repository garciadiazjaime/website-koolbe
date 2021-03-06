import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import AppHandler from './components/AppHandler';
import HomeSection from './components/sections/home';
import RegisterSection from './components/sections/register';
import ContactSection from './components/sections/contact';
import ProjectkSection from './components/sections/projectk';
import ExtraSection from './components/sections/extra';
import BulletinSection from './components/sections/bulletin';


export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={HomeSection} />
      <Route path="inicio" component={HomeSection} />
      <Route path="inscripciones" component={RegisterSection} />
        <Route path="inscripciones/planteles" component={RegisterSection} />
        <Route path="inscripciones/grados" component={RegisterSection} />
        <Route path="inscripciones/requisitos" component={RegisterSection} />

        <Route path="inscripciones/preescolar" component={RegisterSection} />
        <Route path="inscripciones/primaria" component={RegisterSection} />
        <Route path="inscripciones/secundaria" component={RegisterSection} />
        <Route path="inscripciones/preparatoria" component={RegisterSection} />


        <Route path="inscripciones/santafe" component={RegisterSection} />
        <Route path="inscripciones/otay" component={RegisterSection} />
        <Route path="inscripciones/presidentes" component={RegisterSection} />

        <Route path="proyecto-k" component={ProjectkSection} />
        <Route path="proyecto-k/somos-escuela-beo" component={ProjectkSection} />
        <Route path="proyecto-k/mision-vision" component={ProjectkSection} />
        <Route path="proyecto-k/filosofia-religiosa" component={ProjectkSection} />
        <Route path="proyecto-k/metas" component={ProjectkSection} />
        <Route path="proyecto-k/ideario" component={ProjectkSection} />
        <Route path="proyecto-k/valores" component={ProjectkSection} />
        <Route path="proyecto-k/oracion" component={ProjectkSection} />
        <Route path="proyecto-k/himno" component={ProjectkSection} />

      <Route path="extraescolares" component={ExtraSection} />
        <Route path="extraescolares/actividades-deportivas" component={ExtraSection} />
        <Route path="extraescolares/actividades-artisticas" component={ExtraSection} />
        <Route path="extraescolares/areas-conocmiento" component={ExtraSection} />

      <Route path="boletines" component={BulletinSection} />
        <Route path="boletines/santa-fe" component={BulletinSection} />
        <Route path="boletines/otay" component={BulletinSection} />
        <Route path="boletines/presidentes" component={BulletinSection} />

      <Route path="contacto" component={ContactSection} />
    </Route>
  </Router>
);
