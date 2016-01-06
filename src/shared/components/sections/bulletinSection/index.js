import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import SimpleCard from '../../widgets/card/simpleCard';
import data from './data';


export default class ExtraescolaresSection extends React.Component {

  render() {

    return (<div className="container">
        <div className={style.bulletin}>
          <h1>Boletines</h1>
          <hr />
          <br />
          {this.getFiles(data)}
        </div>
      </div>
    );
  }

  getFiles(data) {

    const places = data.map((place, index)=> {

      const bulletines = place.bulletin.map((item, index) => {
        return (<li key={index}>
          <h3><i className="glyphicon glyphicon-file" aria-hidden="true"></i>{item.title}</h3>
          <Link to={item.url} style={place.styleLink}>descargar</Link>
        </li>);
      });

      return (<div className="col-sm-4" key={index}>
          <h2 style={place.styleTile}>{place.title}</h2>
          <ul>
            {bulletines}
          </ul>
        </div>);
    });

    const extras = data.map((place, index)=> {

      const files = place.extra.map((item, index) => {
        return (<li key={index}>
          <h3><i className="glyphicon glyphicon-file" aria-hidden="true"></i>{item.title}</h3>
          <Link to={item.url} style={place.styleLink}>descargar</Link>
        </li>);
      });

      return (<div className="col-sm-4" key={index}>
          <ul key={index}>{files}</ul>
        </div>);
    });

    return (<div>
        <div className="row">
          {places}
        </div>
        <hr className={style.break} />
        <div className="row">
          {extras}
        </div>
      </div>);
  }
}
