import React from 'react';
import { Link } from 'react-router';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Button2 extends React.Component {

  render() {
    // todo: why is "plantel" hardcoded ? cant' be insde children?
    // todo: let's use className and href instead of classTitle/refs
    return (
      <Link className={style[this.props.classTitle]} to={this.props.refs}>
        <h2>Plantel</h2>
        {this.props.children}
      </Link>
    );
  }
}

Button2.propTypes = {
  children: React.PropTypes.object,
  classTitle: React.PropTypes.string,
  refs: React.PropTypes.string.isRequired,
};
