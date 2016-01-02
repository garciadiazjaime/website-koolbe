import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, Link } from 'react-router';

import AppHandler from "./components/AppHandler";
import InicioSection from "./components/sections/inicio";
import AboutUsSection from "./components/sections/aboutus";
import ContactanosSection from "./components/sections/contactanos/index_a";
import ProyectokSection from "./components/sections/proyectok";
import Extraescolares from "./components/sections/extraescolares";



export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={InicioSection} />
      <Route path="inscripciones" component={AboutUsSection} />
      <Route path="contactanos" component={ContactanosSection} />
      <Route path="proyecto-k" component={ProyectokSection} />
      <Route path="Extraescolares" component={Extraescolares} />


    </Route>
  </Router>
);
