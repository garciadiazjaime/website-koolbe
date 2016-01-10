import React, { Component } from 'react';
import _ from 'lodash';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import Constants from '../../../constants';
import SimpleCard from '../../widgets/card/simpleCard';


export default class Plantel extends Component {

  getCards() {
    return [{
      wrapper: {
        style: _.merge({}, { backgroundColor: Constants.blueMedium }),
        className: style.plantelItem,
      },
      elements: [{
        type: 'subtitle',
        text: ['plantel'],
      }, {
        type: 'title',
        text: ['SANTE FE'],
      }, {
        type: 'description',
        text: ['<a style={blancoE} href="tel:6649752237">(664) 975 2237</a> y ' +
          '<a style={blancoE} href="tel:6649752268">68</a>', '<hr />'],
        style: {
          fontFamily: Constants.fontABold,
          fontSize: '18px',
        },
      }, {
        type: 'description',
        text: ['Niveles Escolares'],
        style: {
          fontFamily: Constants.fontABold,
          fontSize: '14px',
        },
      }, {
        type: 'description',
        text: ['Preescolar | Primaria | Secundaria | Preparatoria'],
        style: {
          fontFamily: Constants.fontA,
          fontSize: '12px',
        },
      }],
    }, {
      wrapper: {
        style: _.merge({}, { backgroundColor: Constants.red }),
        className: style.plantelItem,
      },
      elements: [{
        type: 'subtitle',
        text: ['plantel'],
      }, {
        type: 'title',
        text: ['OTAY'],
      }, {
        type: 'description',
        text: ['<a style={blancoE} href="tel:6646244310">(664) 624 4310</a>', '<hr />'],
        style: {
          fontFamily: Constants.fontABold,
          fontSize: '18px',
        },
      }, {
        type: 'description',
        text: ['Niveles Escolares'],
        style: {
          fontFamily: Constants.fontABold,
          fontSize: '14px',
        },
      }, {
        type: 'description',
        text: ['Preescolar | Primaria | Secundaria'],
        style: {
          fontFamily: Constants.fontA,
          fontSize: '12px',
        },
      }],
    }, {
      wrapper: {
        style: _.merge({}, { backgroundColor: Constants.green }),
        className: style.plantelItem,
      },
      elements: [{
        type: 'subtitle',
        text: ['plantel'],
      }, {
        type: 'title',
        text: ['PRESIDENTES'],
      }, {
        type: 'description',
        text: ['<a style={blancoE} href="tel:6649783220">(664) 978 3220</a>', '<hr />'],
        style: {
          fontFamily: Constants.fontABold,
          fontSize: '18px',
        },
      }, {
        type: 'description',
        text: ['Niveles Escolares'],
        style: {
          fontFamily: Constants.fontABold,
          fontSize: '14px',
        },
      }, {
        type: 'description',
        text: ['Preescolar | Primaria | Secundaria'],
        style: {
          fontFamily: Constants.fontA,
          fontSize: '12px',
        },
      }],
    }];
  }

  render() {
    const cards = this.getCards();

    return (<div className="container">
        <div className="row">
          <div className={style.plantelTile}>
            {
              cards.map((card, index) => {
                return (
                  <div className="col-sm-4" key={index}>
                    <div className="row">
                      <SimpleCard data={card} />
                    </div>
                  </div>
                );})
            }
          </div>
        </div>
      </div>
    );
  }
}
