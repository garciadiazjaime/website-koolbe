import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import Intro from './intro';
import menuData from '../../../menuData';
import Sprites from '../../../sprite';
import Address from './address';

import scrollHelper from '../../../utils/scroll';


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
      location: 'santafe',
    };
  }

  componentDidUpdate() {
    /*eslint-disable */
    const { location } = this.props;
    /*eslint-enable */
    scrollHelper(location);
  }

  getLocations(data) {
    const places = data.map((place, index) => {
      return (<Address data={place} key={index} changeLocation={this.changeLocation} />);
    });

    return (<div className="row">
        <div className="col-sm-5">
          {places}
        </div>
        <div className="col-sm-7 hidden-xs">
          <div style={this.state.locations[this.state.location]} className="img-responsive"></div>
        </div>
      </div>);
  }

  changeLocation(event) {
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
