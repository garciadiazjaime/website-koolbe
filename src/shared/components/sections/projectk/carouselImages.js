import _ from 'lodash';
import Constants from '../../../constants';

const slideStyle = {
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '350px',
};

module.exports = {
  meta: {
    id: 'projectk-images',
    style: {
      backgroundImage: 'none',
      height: '50px',
      width: '50px',
      color: '',
      textShadow: 'none',
      opacity: '1',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    arrowLeft: {
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderRight: '20px solid ' + Constants.blueMedium,
    },
    arrowRight: {
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderLeft: '20px solid ' + Constants.blueMedium,
    },
    indicators: {},
    showControl: true,
    showIndicators: false,
    interval: 8000,
  },
  classes: {},
  slides: [{
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/proyectok/slider/Slider-beo-01.jpg')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/proyectok/slider/Slider-beo-02.jpg')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/proyectok/slider/Slider-beo-03.jpg')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/proyectok/slider/Slider-beo-04.jpg')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/proyectok/slider/Slider-beo-05.jpg')",
      }),
    },
    card: {},
  }],
};
