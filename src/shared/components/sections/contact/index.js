import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Intro from './intro';
import menuData from '../../../menuData';
import SimpleCard from '../../widgets/card/simpleCard';
import Sprites from '../../../sprite';
import Address from './address';


export default class Contact extends React.Component {

  constructor(...args) {
    super(...args);
    this.changeLocation = this.changeLocation.bind(this);
    this.state = {
      locations: {
        santafe: Sprites.Contact.SantaFe,
        otay: Sprites.Contact.Otay,
        presidentes: Sprites.Contact.Presidentes
      },
      location: 'santafe'
    };
  }

  render() {

    return (<div className="container">
        <div className={style.contact}>
          <h1>Contáctanos</h1>
          <hr />
          <Intro />

          <h1>Planteles</h1>
          <hr />
          {this.getLocations(menuData.tmp)}

        </div>
      </div>
    );
  }

  changeLocation(locationID) {
    this.setState({
      location: locationID
    })
  }

  getLocations(data) {
    const places = data.map((place, index)=> {
      return (<Address data={place} key={index} changeLocation={this.changeLocation} />)
    });

    return (<div className="row">
        <div className="col-sm-5">
          {places}
        </div>
        <div className="col-sm-7">
          <div style={this.state.locations[this.state.location]} className="pull-right"></div>
        </div>
      </div>)
  }

}
