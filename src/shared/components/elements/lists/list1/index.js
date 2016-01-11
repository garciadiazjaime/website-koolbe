import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class List1 extends React.Component {

  render() {
    // todo: let's use className instead of classTitle
    return (
      <ul className={style[this.props.classTitle]}>
        {this.props.children}
      </ul>
    );
  }
}

List1.propTypes = {
  children: React.PropTypes.object,
  classTitle: React.PropTypes.string,
};
