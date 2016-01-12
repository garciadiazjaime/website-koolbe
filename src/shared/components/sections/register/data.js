const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

module.exports = [{
  title: 'Santa Fé',
  href: 'plantelSantaFe',
  classes: {
    tab: 'blue',
    intro: style.backgroundBlue,
  },
  tels: '(664) 975 2237 y 68',
  coverImage: 'images/aboutus/plantelBlue.jpg',
  images: {
    preescolar: 'images/aboutus/plantelBlue/preescolar.jpg',
    primaria: 'images/aboutus/plantelBlue/primaria.jpg',
    secundaria: 'images/aboutus/plantelBlue/secundaria.jpg',
    preparatoria: 'images/aboutus/plantelBlue/preparatoria.jpg',
  },
  levels: [{
    title: 'Preescolar',
    href: 'preescolar',
  }, {
    title: 'Preescolar',
    href: 'preescolar',
  }, {
    title: 'Secundaria',
    href: 'secundaria',
  }, {
    title: 'Preparatoria',
    href: 'preparatoria',
  }],
}, {
  title: 'Otay',
  href: 'plantelOtay',
  classes: {
    tab: 'red',
    intro: style.backgroundRed,
  },
  tels: '(664) 624 4310',
  coverImage: 'images/aboutus/plantelRed.jpg',
  images: {
    preescolar: 'images/aboutus/plantelRed/preescolar.jpg',
    primaria: 'images/aboutus/plantelRed/primaria.jpg',
    secundaria: 'images/aboutus/plantelRed/secundaria.jpg',
  },
  levels: [{
    title: 'Preescolar',
    href: 'preescolar',
  }, {
    title: 'Preescolar',
    href: 'preescolar',
  }, {
    title: 'Secundaria',
    href: 'secundaria',
  }],
}, {
  title: 'Presidentes',
  href: 'plantelPresidentes',
  classes: {
    tab: 'green',
    intro: style.backgroundGrend,
  },
  tels: '(664) 978-3220',
  coverImage: 'images/aboutus/plantelGreen.jpg',
  images: {
    preescolar: 'images/aboutus/plantelGreen/preescolar.jpg',
    primaria: 'images/aboutus/plantelGreen/primaria.jpg',
    secundaria: 'images/aboutus/plantelGreen/secundaria.jpg',
  },
  levels: [{
    title: 'Preescolar',
    href: 'preescolar',
  }, {
    title: 'Preescolar',
    href: 'preescolar',
  }, {
    title: 'Secundaria',
    href: 'secundaria',
  }],
}];
