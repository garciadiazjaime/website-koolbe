import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title4 extends React.Component {
  render() {
    return (
      <h1 className={style.title4}>
        {this.props.children}
      </h1>
    );
  }
}

Title4 = {
  children: React.PropTypes.string.isRequired,
};
