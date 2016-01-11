import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Hr1 extends React.Component {

  render() {
    return (
      <hr className={style[this.props.className]} />
    );
  }
}

Hr1.propTypes = {
  className: React.PropTypes.object,
};
