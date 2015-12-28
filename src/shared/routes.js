import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, Link } from 'react-router';

import AppHandler from "./components/AppHandler";
import HomeSection from "./components/sections/home";
import AboutUsSection from "./components/sections/aboutus";
import ContactSection from "./components/sections/contact_a";


export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={HomeSection} />
      <Route path="about" component={AboutUsSection} />
      <Route path="contact" component={ContactSection} />
    </Route>
  </Router>
);
