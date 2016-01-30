import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Paragraph1 extends React.Component {

  render() {
    return (
      <p className={style[this.props.classTitle]}>
        {this.props.children}
      </p>
    );
  }
}

Paragraph1.propTypes = {
  children: React.PropTypes.any,
  classTitle: React.PropTypes.string,
};
