import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Sprites from '../../../sprite';
import Constants from '../../../constants';


export default class Contact extends React.Component {


  render() {
    const {data, changeLocation} = this.props;
    const classes = {
      santafe: style.santafeColor,
      otay: style.otayColor,
      presidentes: style.presidentesColor
    };

    return (<div className={style.address}>
        <h2 className={classes[data.id]} onClick={changeLocation.bind(this, data.id)}>{data.title}</h2>

        <div className="row">
          <div className="col-sm-1">
            <i>m</i>
          </div>
          <div className="col-sm-10">
            {data.location}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-offset-1 col-sm-11">
            <a href={data.gmaps} className={classes[data.id]} title="Ver en Google Maps" target="_blank">Ver en Google Maps</a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1">
            <i>t</i>
          </div>
          <div className="col-sm-10">
            {data.tels}
          </div>
        </div>

      </div>
    );
  }

}
