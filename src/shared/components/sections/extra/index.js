import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import SimpleCard from '../../widgets/card/simpleCard';
import Intro from './intro';
import Activities from './activities';
import Contact from './contact';
import Schedule from './schedule';

import scrollHelper from '../../../utils/scroll';


export default class ExtraescolaresSection extends React.Component {

  componentDidUpdate() {
    /*eslint-disable */
    const { location } = this.props;
    /*eslint-enable */
    scrollHelper(location);
  }

  getCards() {
    return [{
      elements: [{
        type: 'image',
        src: 'images/extra/banner.png',
        alt: 'Extraescolares',
        classes: 'img-responsive',
      }],
    }];
  }

  render() {
    const cards = this.getCards();

    return (<div className="container">
        <div className="row">
          <SimpleCard data={cards[0]} />
        </div>
        <Intro />
        <span id="actividades-deportivas"></span>
        <span id="actividades-artisticas"></span>
        <span id="areas-conocmiento"></span>
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
}
