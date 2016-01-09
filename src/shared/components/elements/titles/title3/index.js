import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title3 extends React.Component {
  render() {
    return (
      <h1 className={style.title3}>
        {this.props.children}
      </h1>
    );
  }
}

Title3.propTypes = {
  children: React.PropTypes.string.isRequired,
};
