import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title7 extends React.Component {
  render() {
    return (
      <h1 className={style.title7}>
        {this.props.children}
      </h1>
    );
  }
}

Title7.propTypes = {
  children: React.PropTypes.string.isRequired,
};
