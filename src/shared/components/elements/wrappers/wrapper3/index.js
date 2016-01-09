import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Wrapper3 extends React.Component {
  render() {
    return (
      <div className={style.wrapper3}>
        {this.props.children}
      </div>
    );
  }
}

Wrapper3.propTypes = {
  children: React.PropTypes.object.isRequired,
};
