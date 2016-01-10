import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import AppHandler from './components/AppHandler';
import HomeSection from './components/sections/home';
import AboutUsSection from './components/sections/aboutus';
import ContactSection from './components/sections/contact';
import ProjectkSection from './components/sections/projectk';
import ExtraSection from './components/sections/extra';
import BulletinSection from './components/sections/bulletin';


export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={HomeSection} />
      <Route path="inicio" component={HomeSection} />
      <Route path="inscripciones" component={AboutUsSection} />
      <Route path="proyecto-k" component={ProjectkSection} />
      <Route path="extraescolares" component={ExtraSection} />
      <Route path="boletines" component={BulletinSection} />
      <Route path="contacto" component={ContactSection} />
    </Route>
  </Router>
);
