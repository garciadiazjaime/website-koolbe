import React from 'react';
import _ from 'lodash';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import dataFiles from './data';
import scrollHelper from '../../../utils/scroll';
import Sprites from '../../../sprite';
const iconStyle = _.merge({}, Sprites.General.BoletinesIcon, {
  display: 'inline-block',
  position: 'relative',
  top: '8px',
});

export default class ExtraescolaresSection extends React.Component {

  componentDidUpdate() {
    /*eslint-disable */
    const { location } = this.props;
    /*eslint-enable */
    scrollHelper(location);
  }

  getFiles(data) {
    const places = data.map((place, index) => {
      const bulletines = place.bulletin.map((item, index2) => {
        return (<li key={index2}>
          <h3>
            <i style={iconStyle}></i>
            <span dangerouslySetInnerHTML={this.sanitize(item.title)} />
          </h3>
          <a href={item.url} style={place.styleLink} target="_blank">descargar</a>
        </li>);
      });

      return (<div className="col-sm-4" key={index}>
          <h2 style={place.styleTile} id={place.id}>
            <span dangerouslySetInnerHTML={this.sanitize(place.title)} />
          </h2>
          <ul>
            {bulletines}
          </ul>
        </div>);
    });

    const extras = data.map((place, index) => {
      const files = place.extra.map((item, index2) => {
        return (<li key={index2}>
          <h3>
            <i style={iconStyle}></i>
            <span dangerouslySetInnerHTML={this.sanitize(item.title)} />
            <div className={style.ficha_inscripcion}>
              <span dangerouslySetInnerHTML={this.sanitize(place.title)} className="visible-xs" />
            </div>
          </h3>
          <a href={item.url} style={place.styleLink} target="_blank">
            <span>descargar</span>
          </a>
        </li>);
      });

      return (<div className="col-sm-4" key={index}>
          <ul className={style.files}>{files}</ul>
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

  sanitize(value) {
    return {
      __html: value,
    };
  }

  render() {
    return (<div className="container">
        <div className={style.bulletin}>
          <h1>Boletines</h1>
          <hr />
          <br />
          {this.getFiles(dataFiles)}
        </div>
      </div>
    );
  }
}
