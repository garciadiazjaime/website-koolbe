import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Intro from './intro';
import menuData from '../../../menuData';
import SimpleCard from '../../widgets/card/simpleCard';
import Sprites from '../../../sprite';
import Address from './address';


export default class Contact extends React.Component {

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

  getLocations(data) {
    const places = data.map((place, index)=> {
      return (<Address data={place} key={index} />)
    });

    return (<div className="row">
        <div className="col-sm-5">
          {places}
        </div>
        <div className="col-sm-7">
          <div style={Sprites.Contact.SantaFe} className="pull-right"></div>
        </div>
      </div>)
  }

}
