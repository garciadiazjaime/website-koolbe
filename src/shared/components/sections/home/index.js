import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import SimpleCarousel from '../../widgets/carousel/simpleCarousel';
import Plantel from './plantel';
import Extras from './extras';
import SimpleCard from '../../widgets/card/simpleCard';
import ProyectoK from './proyectok';
import carouselData from './carouselBannerData';
import FooterAAA from '../../layout/footer/FooterAAA';


export default class HomeSection extends React.Component {

  render() {
    const card = this.getCards()[0];

    return (<div>
        <SimpleCarousel data={carouselData} />
        <Plantel />
        <Extras />
        <SimpleCard data={card} />
        <ProyectoK />
        <FooterAAA />
      </div>
    );
  }

  getCards() {
    return [{
      wrapper: {
        style: {
          marginTop: '70px'
        }
      },
      elements: [{
        type: 'image',
        src: 'images/home/noolvidenelamor.png',
        alt: 'no olviden el amor',
        classes: 'img-responsive'
      }]
    }]
  }
}
