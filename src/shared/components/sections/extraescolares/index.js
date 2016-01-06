import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
// import Constants from '../../../constants';
import SimpleCard from '../../widgets/card/simpleCard';
import Intro from './intro';
import Activities from './activities';
import Contact from './contact';
import Schedule from './schedule';


export default class ExtraescolaresSection extends React.Component {

  render() {
    const cards = this.getCards();

    return (<div className="container">
        <div>
          <SimpleCard data={cards[0]} />
        </div>
        <div className={style.intro}>
          <Intro />
        </div>
        <div className={style.activities}>
          <Activities />
        </div>
        <div className={style.contact}>
          <Contact />
        </div>
        <div className={style.schedule}>
          <Schedule />
        </div>
      </div>
    );
  }

  getCards() {
    return [{
      elements: [{
        type: 'image',
        src: 'images/extra/banner.png',
        alt: 'Extraescolares',
        classes: 'img-responsive'
      }]
    }]
  }
}
