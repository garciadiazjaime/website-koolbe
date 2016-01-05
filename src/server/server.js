import express from "express";
import React from "react";

import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../shared/routes';
var config = require('../../config');

const app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('bower_components'));
app.use(express.static('public'));

app.get('/*', function (req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let content = renderToString(<RoutingContext {...renderProps} />);
      res.render('index', { content: content });
      // res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.set('ipaddress', config.get('ipaddress'));
app.set('port', config.get('port'));

var server = app.listen(app.get('port'), app.get('ipaddress'), function(err) {
  if (err) {
    console.log(err);
  }

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
