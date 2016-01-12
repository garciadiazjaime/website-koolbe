const Constants = require('../../../constants');

module.exports = [{
  title: 'SANTA FE',
  id: 'santa-fe',
  styleTile: {
    color: Constants.blueLight,
  },
  styleLink: {
    backgroundColor: Constants.blueLight,
  },
  bulletin: [{
    title: 'Boletín Preescolar',
    url: '#',
  }, {
    title: 'Boletín Primaria',
    url: '#',
  }, {
    title: 'Boletín Secundaria',
    url: '#',
  }, {
    title: 'Boletín Preparatoria',
    url: '#',
  }],
  extra: [{
    title: 'Ficha de Inscripción',
    url: '/pdfs/santafe/ficha-Inscripcion.pdf',
  }],
}, {
  title: '&nbsp;&nbsp;&nbsp;&nbsp;OTAY',
  id: 'otay',
  styleTile: {
    color: Constants.red,
  },
  styleLink: {
    backgroundColor: Constants.red,
  },
  bulletin: [{
    title: 'Boletín Preescolar',
    url: '#',
  }, {
    title: 'Boletín Primaria',
    url: '#',
  }, {
    title: 'Boletín Secundaria',
    url: '#',
  }],
  extra: [{
    title: 'Ficha de Inscripción',
    url: '/pdfs/otay/ficha-Inscripcion.pdf',
  }],
}, {
  title: '&nbsp;&nbsp;&nbsp;&nbsp;PRESIDENTES',
  id: 'presidentes',
  styleTile: {
    color: Constants.green,
  },
  styleLink: {
    backgroundColor: Constants.green,
  },
  bulletin: [{
    title: 'Boletín Preescolar',
    url: '#',
  }, {
    title: 'Boletín Primaria',
    url: '#',
  }, {
    title: 'Boletín Secundaria',
    url: '#',
  }],
  extra: [{
    title: 'Ficha de Inscripción',
    url: '/pdfs/presidentes/ficha-Inscripcion.pdf',
  }],
}];
