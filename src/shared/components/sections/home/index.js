import React from "react";
import { Link } from 'react-router';

import SimpleCarousel from '../../widgets/carousel/simpleCarousel';
import Plantel from './plantel';
import Extras from './extras';
import SimpleCard from '../../widgets/card/simpleCard';
import ProyectoK from './proyectok';
import carouselData from './carouselBannerData';


export default class HomeSection extends React.Component {

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

  getCards() {
    return [{
      wrapper: {
        style: {
          marginTop: '70px',
          textAlign: 'center'
        }
      },
      elements: [{
        type: 'image',
        src: 'images/home/noolvidenelamor.png',
        alt: 'no olviden el amor',
        classes: 'img-responsive',
        style: {
          display: 'inline-block'
        }
      }]
    }]
  }
}
