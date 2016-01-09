import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title8 extends React.Component {
  render() {
    return (
      <h1 className={style.title8}>
        {this.props.children}
      </h1>
    );
  }
}

Title8.propTypes = {
  children: React.PropTypes.string.isRequired,
};
