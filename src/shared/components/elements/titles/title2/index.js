import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title2 extends React.Component {
  render() {
    return (
      <h1 className={style.title2}>
        {this.props.children}
      </h1>
    );
  }
}

Title2.propTypes = {
  children: React.PropTypes.array.isRequired,
};
