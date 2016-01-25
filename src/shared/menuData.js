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
    url: 'https://www.facebook.com/InstitutoRamiroKolbe/?fref=ts',
  }],
  // todo: tmp should be address onces footer gets adapted
  tmp: [{
    id: 'santafe',
    title: 'Santa Fe',
    location: 'Camino Vecinal 11998, Pórticos Santa Fe Tijuana B.C. 22666, México.',
    gmaps: 'https://www.google.com.mx/maps/place/Instituto+Ramiro+Kolbe/@32.4440469,-117.0278012,17z/data=!3m1!4b1!4m2!3m1!1s0x80d9370497bd9efb:0x1cb650ba794c36c4',
    tels: '(664) 975 2237 y 68',
  }, {
    id: 'otay',
    title: 'Otay',
    location: 'Minería 150 Plaza Otay Tijuana B.C. 22510, México',
    gmaps: 'https://www.google.com.mx/maps/place/INSTITUTO+RAMIRO+KOLBE/@32.5345426,-116.9346619,17z/data=!3m1!4b1!4m7!1m4!3m3!1s0x80d9477486c3f6d7:0x2d0ceb3210beca8c!2sCalle+Mineria,+Tijuana,+B.C.!3b1!3m1!1s0x80d94774792cd65d:0xc69b704e3f630e1d',
    tels: '(664) 624 4310',
  }, {
    id: 'presidentes',
    title: 'Presidentes',
    location: 'Ave. Del Águila Azteca 7072 Col. Guaycura 22216 Tijuana B.C.',
    gmaps: 'https://www.google.com.mx/maps/search/1302+Miguel+Alem%C3%A1n+Valdez,Tijuana,+Baja+California/@32.4915881,-116.9132486,3a,75y,354.52h,66.22t/data=!3m8!1e1!3m5!1svgavouZXwMHybwaXLv1m5Q!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DvgavouZXwMHybwaXLv1m5Q%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D91.518616%26pitch%3D0!7i13312!8i6656!4b1',
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
