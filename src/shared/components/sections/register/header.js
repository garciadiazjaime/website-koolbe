import React, { Component } from 'react';
import _ from 'lodash';

import Button1 from '../../elements/buttons/button1';
import Button2 from '../../elements/buttons/button2';
import ImageInsert from '../../elements/images/image';
import Par1 from '../../elements/paragraphs/paragraph1';
import Title1 from '../../elements/titles/title1';
import Title2 from '../../elements/titles/title2';
import Wrapper1 from '../../elements/wrappers/wrapper1';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Header extends Component {

  constructor(...args) {
    super(...args);
    this.clickHandler = this.props.onClick.bind(this);
  }

  getTabs(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const { href, classes } = item;
        return (<div className={'col-xs-4 ' + style.colNopad} key={index}>
          <Button2 href={href} className={classes.tab} onClick={this.clickHandler} index={index}>
            <h2>Plantel</h2>
            {item.title}
          </Button2>
        </div>);
      });
    }
    return null;
  }

  getLevels(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<Button1 refs={item.href} classTitle="button3" index={index} key={index}>
          {item.title} |&nbsp;
        </Button1>);
      });
    }
  }

  getBody(item) {
    return (<div>
      <div className="col-xs-12 col-sm-4" style={{ paddingLeft: '50px' }}>
        <Title2 className="title1">
          {item.title}
        </Title2>
        <Par1 classTitle="par3">
          {item.tels}
        </Par1>
        <Title1 className="title9">
          Niveles escolares
        </Title1>
        <div style={{ marginBottom: '35px' }}>
          {this.getLevels(item.levels)}
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Button1 refs="contact" classTitle="button4">
              Contáctanos
            </Button1>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8">
        <ImageInsert url={item.coverImage} classTitle="image1" />
      </div>
    </div>);
  }

  render() {
    const { data, index } = this.props;
    const place = data[index];
    return (<div>

        <div className="container">
          <div className="row">
            {this.getTabs(data)}
          </div>
        </div>

        <div className={place.classes.intro}>
          <Wrapper1 className="wrapper3">
            <div className="container">
              <div className="row">
                {this.getBody(place)}
              </div>
            </div>
          </Wrapper1>
        </div>

      </div>);
  }
}

Header.propTypes = {
  data: React.PropTypes.array.isRequired,
  index: React.PropTypes.number,
  onClick: React.PropTypes.func,
};
