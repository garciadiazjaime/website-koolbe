import _ from 'lodash';

import Sprites from './sprite';

module.exports = {
  items: [{
    title: 'Inicio',
    url: 'inicio',
  }, {
    title: 'Inscripciones',
    url: 'inscripciones',
    children: [{
      title: 'Planteles',
      url: 'inscripciones/planteles',
    }, {
      title: 'Grados',
      url: 'inscripciones/grados',
    }, {
      title: 'Requisitos',
      url: 'inscripciones/requisitos',
    }, {
      title: 'Uniformes',
      url: 'pdfs/uniformes.pdf',
      type: 'outside',
    }],
  }, {
    title: 'PROYECTO K',
    url: 'proyecto-k',
    children: [{
      title: 'Misión y Visión',
      url: 'proyecto-k/mision-vision',
    }, {
      title: 'Filosofía',
      url: 'proyecto-k/filosofia-religiosa',
    }, {
      title: 'Metas',
      url: 'proyecto-k/metas',
    }, {
      title: 'Ideario',
      url: 'proyecto-k/ideario',
    }, {
      title: 'Valores',
      url: 'proyecto-k/valores',
    }, {
      title: 'Oración',
      url: 'proyecto-k/oracion',
    }, {
      title: 'Himno',
      url: 'proyecto-k/himno',
    }],
  }, {
    title: 'Extraescolares',
    url: 'extraescolares',
    children: [{
      title: 'Actividades Deportivas',
      url: 'extraescolares/actividades-deportivas',
    }, {
      title: 'Actividades Artisticas',
      url: 'extraescolares/actividades-artisticas',
    }, {
      title: 'Áreas del conocmiento',
      url: 'extraescolares/areas-conocmiento',
    }],
  }, {
    title: 'Boletines',
    url: 'boletines',
    children: [{
      title: 'Santa Fe',
      url: 'boletines/santa-fe',
    }, {
      title: 'Otay',
      url: 'boletines/otay',
    }, {
      title: 'Presidentes',
      url: 'boletines/presidentes',
    }],
  }, {
    title: 'Contacto',
    url: 'contacto',
  }],
  icons: [{
    title: 'facebook',
    style: _.merge({}, Sprites.General.Facebook, {
      display: 'inline-block',
    }),
    url: '#',
  }],
  // todo: tmp should be address onces footer gets adapted
  tmp: [{
    id: 'santafe',
    title: 'Santa Fe',
    location: 'Camino Vecinal 11998, Pórticos Santa Fe Tijuana B.C. 22666, México.',
    gmaps: '#',
    tels: '(664) 975 2237 y 68',
  }, {
    id: 'otay',
    title: 'Otay',
    location: 'Minería 150 Plaza Otay Tijuana B.C. 22510, México',
    gmaps: '#',
    tels: '(664) 624 4310',
  }, {
    id: 'presidentes',
    title: 'Presidentes',
    location: 'Ave. Del Águila Azteca 7072 Col. Guaycura 22216 Tijuana B.C.',
    gmaps: '#',
    tels: '(664) 978-3220',
  }],
  addresses: [{
    elements: [{
      type: 'subtitle',
      text: ['Santa Fe'],
    }, {
      type: 'description',
      text: ['Camino Vecinal 11998,<br /> Pórticos Santa Fe <br />' +
        ' Tijuana B.C. 22666, México.<br /><br />'],
    }, {
      type: 'description',
      text: ['<a href="tel:6649752237" title="6649752237">(664) 975 2237</a>' +
        ' y <a href="tel:6649752268" title="6649752268">68</a>'],
    }],
  }, {
    elements: [{
      type: 'subtitle',
      text: ['Otay'],
    }, {
      type: 'description',
      text: ['Minería 150 Plaza Otay<br /> Tijuana B.C. 22510, México ' +
        '<br /><br /><br />'],
    }, {
      type: 'description',
      text: ['<a href="tel:6646244310" title="6646244310">(664) 624 4310</a>'],
    }],
  }, {
    elements: [{
      type: 'subtitle',
      text: ['Presidentes'],
    }, {
      type: 'description',
      text: ['Ave. Del Águila Azteca <br />7072 Col. Guaycura 22216 <br />' +
        'Tijuana B.C.<br /><br />'],
    }, {
      type: 'description',
      text: ['<a href="tel:6649783220" title="6649783220">(664) 978-3220</a>'],
    }],
  }],
};
