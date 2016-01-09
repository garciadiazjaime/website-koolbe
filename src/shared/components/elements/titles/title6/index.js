import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title6 extends React.Component {
  render() {
    return (
      <h1 className={style.title6}>
        {this.props.children}
      </h1>
    );
  }
}

Title6.propTypes = {
  children: React.PropTypes.string.isRequired,
};
