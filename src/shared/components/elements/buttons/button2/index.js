import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Button2 extends React.Component {

  constructor(...args) {
    super(...args);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.onClick(this.props.index);
  }

  render() {
    // improve element to handle multiple cases eg- no onClick fn sent
    const { className } = this.props;
    return (
      <a className={style[className]} onClick={this.clickHandler}>
        {this.props.children}
      </a>
    );
  }
}

Button2.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
  className: React.PropTypes.string,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  index: React.PropTypes.number,
};
