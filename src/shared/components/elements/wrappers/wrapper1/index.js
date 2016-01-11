import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Wrapper1 extends React.Component {

  render() {
    return (
      <div className={style[this.props.className]}>
        {this.props.children}
      </div>
    );
  }
}

Wrapper1.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array.isRequired,
    React.PropTypes.object,
  ]),
  className: React.PropTypes.string,
};
