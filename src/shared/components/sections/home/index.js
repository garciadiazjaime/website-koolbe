import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Carousel from '../../widgets/carousel/simpleCarousel';
import Plantel from './plantel';
import Extras from './extras';


import carouselData from './carouselData';

export default class HomeSection extends React.Component {

  render() {

    return (
        <div>
          <Carousel data={carouselData} />
          <Plantel />
          <Extras />
        </div>
  );
  }
}
