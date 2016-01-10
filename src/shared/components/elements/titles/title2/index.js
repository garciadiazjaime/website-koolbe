import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title2 extends React.Component {
  render() {
    return (
      <div className={style[this.props.className]}>
        <h2>Plantel</h2>
        {this.props.children}
      </div>
    );
  }
}

Title2.propTypes = {
  children: React.PropTypes.array.isRequired,
};
