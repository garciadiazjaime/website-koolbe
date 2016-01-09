import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title5 extends React.Component {
  render() {
    return (
      <h1 className={style.title4}>
        {this.props.children}
      </h1>
    );
  }
}

Title5.propTypes = {
  children: React.PropTypes.string.isRequired,
};
