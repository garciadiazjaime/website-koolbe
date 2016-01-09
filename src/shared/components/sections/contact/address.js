import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Address extends React.Component {

  constructor(...args) {
    super(...args);
    this.changeLoc = this.props.changeLocation;
  }


  render() {
    const { data } = this.props;
    const classes = {
      santafe: style.santafeColor,
      otay: style.otayColor,
      presidentes: style.presidentesColor,
    };

    return (<div className={style.address}>
        <h2 className={classes[data.id]} onClick={this.changeLoc} id={data.id}>{data.title}</h2>

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
            <a href={data.gmaps} className={classes[data.id]} target="_blank">
              Ver en Google Maps
            </a>
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

Address.propTypes = {
  data: React.PropTypes.object.isRequired,
  changeLocation: React.PropTypes.func.isRequired,
};