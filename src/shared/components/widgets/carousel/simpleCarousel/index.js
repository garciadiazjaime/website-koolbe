import React, { Component } from 'react';
import _ from 'lodash';

import SimpleCard from '../../card/simpleCard';

export default class SimpleCarousel extends Component {

  constructor(props) {
    super(props);
  }

  getSlides(slides) {
    if (_.isArray(slides) && slides.length) {
      return slides.map((slide, index) => {
        const { data } = this.props;
        const activeState = this.getActiveState(index);
        const classes = 'item ' + activeState + ' ' + data.classes.item;

        return (<div className={classes} key={index} style={slide.wrapper.style}>
            <div className="container">
              <div className={data.classes.wrapperElement || ''}>
                <SimpleCard data={slide.card} />
              </div>
            </div>
          </div>);
      }, this);
    }
    return null;
  }

  getIndicators(data, cID, iS) {
    if (_.isArray(data) && data.length) {
      return data.map((slide, i) => {
        const s = this.getActiveState(i);
        return (
          <li data-target={cID} data-slide-to={i} key={i} className={s} style={iS}></li>
        );
      }, this);
    }

    return null;
  }

  getActiveState(index) {
    return index === 0 ? 'active' : null;
  }

  getControls(meta, carouselID) {
    const ArrowStyle = {
      leftArrow: _.merge({}, meta.arrowLeft, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
      }),
      rightArrow: _.merge({}, meta.arrowRight, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
      }),
    };

    const leftClasses = 'left carousel-control';
    const rightClasses = 'right carousel-control';
    const href = '#' + carouselID;
    return (<div>
        <a className={leftClasses} href={href} role="button" data-slide="prev" style={meta.style}>
          <div style= {ArrowStyle.leftArrow} aria-hidden="true"></div>
          <span className="sr-only">Previous</span>
        </a>
        <a className={rightClasses} href={href} role="button" data-slide="next" style={meta.style}>
          <div style= {ArrowStyle.rightArrow} aria-hidden="true"></div>
          <span className="sr-only">Next</span>
        </a>
      </div>);
  }


  render() {
    const { data } = this.props;
    const slidesEl = data ? this.getSlides(data.slides) : null;
    const controls = data.meta.showControl !== false ?
      this.getControls(data.meta, data.meta.id)
      : null;
    const indicatorsEl = data.meta.showIndicators !== false ?
      this.getIndicators(data.slides, data.meta.id, data.meta.indicators)
      : null;
    const { id } = data.meta;
    const interval = data.meta.interval ? data.meta.interval : 8000;

    return (
      <div id={id} className="carousel slide" data-ride="carousel" data-interval={interval}>
        <ol className="carousel-indicators">
          {indicatorsEl}
        </ol>
        <div className={data.classes.carouselInner + ' carousel-inner'} role="listbox">
          {slidesEl}
        </div>
        {controls}
      </div>
    );
  }
}

SimpleCarousel.propTypes = {
  data: React.PropTypes.object.isRequired,
};
