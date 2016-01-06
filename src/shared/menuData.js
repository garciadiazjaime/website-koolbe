import _ from 'lodash';

import Sprites from './sprite';

module.exports = {
  items: [{
    title: 'Inicio',
    url: 'inicio'
  }, {
    title: 'Inscripciones',
    url: 'inscripciones',
    children: [{
      title: 'Planteles',
      url: 'planteles'
    }, {
      title: 'Grados',
      url: 'grados'
    }, {
      title: 'Requisitos',
      url: 'requisitos'
    }, {
      title: 'Uniformes',
      url: 'uniformes'
    }]
  }, {
    title: 'PROYECTO K',
    url: 'proyecto-k',
    children: [{
      title: 'Misión yVisión',
      url: 'mision-vision',
    }, {
      title: 'Filosofía',
      url: 'filosofia'
    }, {
      title: 'Metas',
      url: 'metas'
    }, {
      title: 'Ideario',
      url: 'ideario'
    }, {
      title: 'Valores',
      url: 'valores'
    }, {
      title: 'Oración',
      url: 'oracion'
    }, {
      title: 'Himno',
      url: 'himno'
    }]
  }, {
    title: 'Extraescolares',
    url: 'extraescolares',
    children: [{
      title: 'Actividades Deportivas',
      url: 'actividades-deportivas'
    }, {
      title: 'Actividades Artisticas',
      url: 'actividades-artisticas'
    }, {
      title: 'Áreas del conocmiento',
      url: 'areas-conocmiento'
    }]
  }, {
    title: 'Boletines',
    url: 'boletines',
    children: [{
      title: 'Santa Fe',
      url: 'santa-fe'
    }, {
      title: 'Otay',
      url: 'otay'
    }, {
      title: 'Presidentes',
      url: 'presidentes'
    }]
  }, {
    title: 'Contacto',
    url: 'contacto'
  }],
  icons: [{
    title: 'facebook',
    style: _.merge({}, Sprites.General.Facebook, {
      display: 'inline-block'
    }),
    url: '#'
  }],
  addresses: [{
    elements: [{
      type: 'subtitle',
      text: ['Santa Fe'],
    }, {
      type: 'description',
      text: ['Camino Vecinal 11998,<br /> Pórticos Santa Fe <br /> Tijuana B.C. 22666, <br /> México.']
    }, {
      type: 'description',
      text: ['<a href="tel:6649752237" title="6649752237">(664) 975 2237</a> y <a href="tel:6649752268" title="6649752268">68</a>']
    }]
  }, {
    elements: [{
      type: 'subtitle',
      text: ['Otay'],
    }, {
      type: 'description',
      text: ['Minería 150 Plaza Otay<br /> Tijuana B.C. 22510,<br /> México <br /><br />']
    }, {
      type: 'description',
      text: ['<a href="tel:6646244310" title="6646244310">(664) 624 4310</a>']
    }]
  }, {
    elements: [{
      type: 'subtitle',
      text: ['Presidentes'],
    }, {
      type: 'description',
      text: ['Ave. Del Águila Azteca <br />7072 Col. Guaycura<br />22216 Tijuana B.C.<br /><br />']
    }, {
      type: 'description',
      text: ['<a href="tel:6649783220" title="6649783220">(664) 978-3220</a>']
    }]
  }]
};
