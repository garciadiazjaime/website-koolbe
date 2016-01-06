import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, Link } from 'react-router';

import AppHandler from "./components/AppHandler";
import InicioSection from "./components/sections/home";
import AboutUsSection from "./components/sections/aboutus";
import ContactanosSection from "./components/sections/contactanos/index_a";
import ProyectokSection from "./components/sections/proyectok";
import Extraescolares from "./components/sections/extraescolares";
import BulletinSection from './components/sections/bulletinSection'


export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={InicioSection} />
      <Route path="inicio" component={InicioSection} />
      <Route path="inscripciones" component={AboutUsSection} />
      <Route path="proyecto-k" component={ProyectokSection} />
      <Route path="extraescolares" component={Extraescolares} />
      <Route path="boletines" component={BulletinSection} />
      <Route path="contactanos" component={ContactanosSection} />
    </Route>
  </Router>
);
