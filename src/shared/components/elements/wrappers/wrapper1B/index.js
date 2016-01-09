import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Wrapper1B extends React.Component {
  render() {
    return (
      <div className={style.wrapper1B}>
        {this.props.children}
      </div>
    );
  }
}

Wrapper1B.propTypes = {
  children: React.PropTypes.array.isRequired,
};
