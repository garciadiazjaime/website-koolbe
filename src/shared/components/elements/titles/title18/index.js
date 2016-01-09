import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title18 extends React.Component {
  render() {
    return (
      <h1 className={style.title18}>
        {this.props.children}
      </h1>
    );
  }
}

Title18.propTypes = {
  children: React.PropTypes.array.isRequired,
};
