import _ from 'lodash';

const slideStyle = {
  backgroundSize: 'cover',
  height: '350px',
};

module.exports = {
  meta: {
    id: 'slide-projectk-images',
    style: {},
    arrowLeft: '',
    arrowRight: '',
    indicators: {},
    showControl: false,
    showIndicators: true,
    interval: 20000,
  },
  classes: {},
  slides: [{
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/slider/slide1.jpg')",
      }),
    },
    card: {},
  }],
};
