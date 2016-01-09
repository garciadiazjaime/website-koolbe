import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


export default class SimpleCard extends Component {

  constructor(props) {
    super(props);
  }

  getWrapper(data) {
    return data && _.isObject(data.style) ? data.style : null;
  }

  getTitle(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<h1 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h1>);
      });
    }
    return null;
  }

  getSubtitle(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<h2 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h2>);
      });
    }
    return null;
  }

  getDescription(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<p style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></p>);
      });
    }
    return null;
  }

  getLink(data, index) {
    const { text, url, style } = data;
    if (text && url) {
      return (
        <Link dangerouslySetInnerHTML={this.sanitize(text)} to={url} key={index} style={style} />
      );
    }
    return null;
  }

  getSprite(data, index) {
    if (data && data.style) {
      return (<div key={index} style={data.style}></div>);
    }
    return null;
  }

  getImage(data, index) {
    const { src, style, alt, classes } = data;
    if (src) {
      return (<img src={src} style={style} alt={alt} className={classes} key={index} />);
    }
    return null;
  }

  sanitize(value) {
    return {
      __html: value,
    };
  }

  render() {
    if (_.isArray(this.props.data.elements) && this.props.data.elements.length) {
      const wrapperStyle = this.getWrapper(this.props.data.wrapper);
      const Components = this.props.data.elements.map((item, index) => {
        switch (item.type.toUpperCase()) {
          case 'TITLE':
            return this.getTitle(item);
          case 'SUBTITLE':
            return this.getSubtitle(item);
          case 'DESCRIPTION':
            return this.getDescription(item);
          case 'LINK':
            return this.getLink(item, index);
          case 'SPRITE':
            return this.getSprite(item, index);
          case 'IMAGE':
            return this.getImage(item, index);
          default:
            return null;
        }
      });
      return (
        <div style={wrapperStyle}>
          {Components}
        </div>
      );
    }
    return null;
  }
}

SimpleCard.propTypes = {
  data: React.PropTypes.object.isRequired,
};
