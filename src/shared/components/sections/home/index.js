import React from 'react';

import SimpleCarousel from '../../widgets/carousel/simpleCarousel';
import Plantel from './plantel';
import Extras from './extras';
import SimpleCard from '../../widgets/card/simpleCard';
import ProyectoK from './proyectok';
import carouselData from './carouselBannerData';

import scrollHelper from '../../../utils/scroll';


export default class HomeSection extends React.Component {

  componentWillMount() {
    const images = ['url(\'images/mobile/home/banner/pre.jpg\')',
      'url(\'images/mobile/home/banner/primaria.jpg\')',
      'url(\'images/mobile/home/banner/prepa.jpg\')',
      'url(\'images/mobile/home/banner/extra.jpg\')',
      'url(\'images/mobile/home/banner/beo.jpg\')'];
    if (process.env.NODE_ENV === 'DEV' && window.innerWidth <= 320) {
      images.map((item, index) => {
        carouselData.slides[index].wrapper.style.backgroundImage = item;
      });
      this.setState({
        status: true,
      });
    }
  }

  componentDidUpdate() {
    const { location } = this.props;
    scrollHelper(location);
  }

  getCards() {
    return [{
      wrapper: {
        style: {
          marginTop: '70px',
          textAlign: 'center',
        },
      },
      elements: [{
        type: 'image',
        src: 'images/home/noolvidenelamor.png',
        alt: 'no olviden el amor',
        classes: 'img-responsive',
        style: {
          display: 'inline-block',
        },
      }],
    }];
  }

  render() {
    const card = this.getCards()[0];

    return (<div>
        <SimpleCarousel data={carouselData} />
        <Plantel />
        <Extras />
        <SimpleCard data={card} />
        <ProyectoK />
      </div>
    );
  }
}

HomeSection.propTypes = {
  location: React.PropTypes.any,
};
