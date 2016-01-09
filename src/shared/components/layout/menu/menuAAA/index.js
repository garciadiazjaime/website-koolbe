import React, { Component } from 'react';
import { Link } from 'react-router';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import Sprites from '../../../../sprite';


export default class MainMenu extends Component {

  getItems(data) {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.url} className={style.navbarNavAnchor}>{item.title}</Link>
        </li>
      );
    });
  }

  getIcons(data) {
    return data.map((item, index) => {
      return (<a key={index} style={item.style} href={item.url}>&nbsp;</a>);
    });
  }

  render() {
    const id = '#bs-navbar-main-menu';
    const c = 'navbar-toggle collapsed';

    return (
      <div className="container">
        <nav className={style.navbarDefault + ' navbar navbar-default'}>
          <div className={style.navbarHeader + ' navbar-header'}>

            <a title="Inicio" className="navbar-brand" href="/" style={Sprites.General.Logo} />

            <button className={c} data-toggle="collapse" data-target={id} aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

          </div>

          <div className="hidden-xs hidden-sm">&nbsp;</div>

          <div className={style.navbarCollapse + ' collapse navbar-collapse'} id={id}>
            <ul className={style.navbarNav + ' nav navbar-nav'}>
              {this.getItems(this.props.items)}
            </ul>
            <div className={style.socialNetwork}>
              {this.getIcons(this.props.icons)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

MainMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  icons: React.PropTypes.array,
};
