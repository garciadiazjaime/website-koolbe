import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


export default class SimpleCard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    if (_.isArray(this.props.data.elements) && this.props.data.elements.length) {
      var wrapperStyle = this.getWrapper(this.props.data.wrapper);
      var Components = this.props.data.elements.map((item, index) => {
        switch (item.type.toUpperCase()) {
          case 'TITLE':
            return this.getTitle(item);
          case 'SUBTITLE':
            return this.getSubtitle(item);
          case 'DESCRIPTION':
            return this.getDescription(item);
          case 'LINK':
            return this.getLink(item, index);
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

  getWrapper(data) {
    return data && _.isObject(data.style) ? data.style : null;
  }

  getTitle(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<h1 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h1>);
      })
    }
    return null;
  }

  getSubtitle(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<h2 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h2>);
      })
    }
    return null;
  }

  getDescription(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<p style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></p>);
      })
    }
    return null;
  }

  getLink(data, index) {
    if (data && data.text && data.url) {
      return (<Link dangerouslySetInnerHTML={this.sanitize(data.text)} to={data.url} key={index} style={data.style}></Link>);
    }
    return null;
  }

  sanitize(value) {
    return {
      __html: value
    };
  }
}

SimpleCard.propTypes = {
  data: React.PropTypes.object.isRequired
};
