import React from 'react';
import { Link } from 'react-router';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Button1 extends React.Component {

  render() {
    // todo: let's use className and href instead of classTitle/refs
    return (
      <Link className={style[this.props.classTitle]} to={this.props.refs}>
        {this.props.children}
      </Link>
    );
  }
}

Button1.propTypes = {
  children: React.PropTypes.object,
  classTitle: React.PropTypes.string,
  refs: React.PropTypes.string.isRequired,
};
