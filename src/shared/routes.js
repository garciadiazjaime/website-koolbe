import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, Link } from 'react-router';

import AppHandler from "./components/AppHandler";
import HomeSection from "./components/sections/home";
import AboutUsSection from "./components/sections/aboutus";
import ContactSection from "./components/sections/contact/index_a";
import ProyectokSection from "./components/sections/proyectok";
import Extraescolares from "./components/sections/extraescolares";



export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={HomeSection} />
      <Route path="inscripciones" component={AboutUsSection} />
      <Route path="contacto" component={ContactSection} />
      <Route path="proyecto-k" component={ProyectokSection} />
      <Route path="Extraescolares" component={Extraescolares} />


    </Route>
  </Router>
);
