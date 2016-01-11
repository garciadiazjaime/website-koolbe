import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Image extends React.Component {

  render() {
    // todo: let's use className instead of classTitle
    // let's rename this file "image1"
    return (
      <img src={this.props.url} className={style[this.props.classTitle]}/>
    );
  }
}

Image.propTypes = {
  classTitle: React.PropTypes.string,
  url: React.PropTypes.string.isRequired,
};
