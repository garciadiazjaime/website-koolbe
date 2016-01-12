import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import Intro from './intro';
import menuData from '../../../menuData';
import Sprites from '../../../sprite';
import Address from './address';

import scrollHelper from '../../../utils/scroll';

let shouldUpdate = true;

export default class Contact extends React.Component {

  constructor(...args) {
    super(...args);
    this.changeLocation = this.changeLocation.bind(this);
    this.state = {
      locations: {
        santafe: Sprites.Contact.SantaFe,
        otay: Sprites.Contact.Otay,
        presidentes: Sprites.Contact.Presidentes,
      },
      titleBck: {
        santafe: style.santafeBackground,
        otay: style.otayBackground,
        presidentes: style.presidentesBackground,
      },
      location: 'santafe',
    };
  }

  componentDidUpdate() {
    /*eslint-disable */
    const { location } = this.props;
    /*eslint-enable */
    if (shouldUpdate) {
      scrollHelper(location);
    }
    shouldUpdate = true;
  }

  getLocations(data) {
    const places = data.map((place, index) => {
      return (<Address data={place} key={index} changeLocation={this.changeLocation} />);
    });
    const bckClass = this.state.titleBck[this.state.location];
    const title = data.filter((item) => {
      return item.id === this.state.location;
    })[0].title;
    return (<div className="row">
        <div className="col-sm-5">
          {places}
        </div>
        <div className="col-sm-7 hidden-xs">
          <div className={style.locationTitle + ' ' + bckClass}>{title}</div>
          <div style={this.state.locations[this.state.location]} className="img-responsive"></div>
        </div>
      </div>);
  }

  changeLocation(event) {
    shouldUpdate = false;
    this.setState({
      location: event.target.id,
    });
  }

  render() {
    return (<div className="container">
        <div className={style.contact}>
          <h1>Contáctanos</h1>
          <hr />
          <Intro />
          <br className="visible-xs" />
          <h1>Planteles</h1>
          <hr />
          { this.getLocations(menuData.tmp) }
        </div>
      </div>
    );
  }

}
