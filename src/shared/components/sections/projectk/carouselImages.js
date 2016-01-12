import _ from 'lodash';

const slideStyle = {
  backgroundSize: 'cover',
  height: '350px',
};

module.exports = {
  meta: {
    id: 'projectk-images',
    style: {},
    arrowLeft: '',
    arrowRight: '',
    indicators: {},
    showControl: true,
    showIndicators: false,
    interval: 8000,
  },
  classes: {},
  slides: [{
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/proyectok/slider/slide1.jpg')",
      }),
    },
    card: {},
  }],
};
