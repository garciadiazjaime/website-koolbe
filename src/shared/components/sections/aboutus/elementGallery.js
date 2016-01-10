'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';


import Button1 from '../../elements/buttons/button1';
import Button2 from '../../elements/buttons/button2';

import Image1 from '../../elements/images/image';
import List1 from '../../elements/lists/list1';

import Hr1 from '../../elements/misc/hr1';

import Par from '../../elements/paragraphs/paragraph1';



export default class AboutUs extends Component {

  render() {

    return (
      <div>
        <Button1 refs="http://www.google.com" classTitle="button1">
          Button1.button1
        </Button1>

        <Button1 refs="http://www.google.com" classTitle="button1">
          Button1.button2
        </Button1>

        <Button1 refs="http://www.google.com" classTitle="button1">
          Button1.button3
        </Button1>

        <Button1 refs="http://www.google.com" classTitle="button1">
          Button1.button4
        </Button1>

        <Button2 refs="http://www.google.com" classTitle="blue">
          Button2.blue
        </Button2>
        <Button2 refs="http://www.google.com" classTitle="red">
          Button2.red
        </Button2>
        <Button2 refs="http://www.google.com" classTitle="green">
          Button2.green
        </Button2>
        <Image1 url="images/aboutus/plantelBlue.jpg" classTitle="image1" />
        <Image1 url="images/aboutus/plantelBlue.jpg" classTitle="image2" />
        <Image1 url="images/aboutus/plantelBlue.jpg" classTitle="image3" />
        <Image1 url="images/aboutus/plantelBlue.jpg" classTitle="image4" />

        <List1 classTitle="list1">
          <li>List1 element1</li>
          <li>List1 element2</li>
          <li>List1 element3</li>
        </List1>
        <List1 classTitle="list2">
          <li>List2 element1</li>
          <li>List2 element2</li>
          <li>List2 element3</li>
        </List1>
        <Hr1 />
        <List1 classTitle="list3">
          <li>List3 element1</li>
          <li>List3 element2</li>
          <li>List3 element3</li>
        </List1>
        <Hr1 />
        <List1 classTitle="list4">
          <li>List4 element1</li>
          <li>List4 element2</li>
          <li>List4 element3</li>
        </List1>
        <Par classTitle="par1">
          Par1
        </Par>
        <Par classTitle="par2">
          Par2
        </Par>
        <Par classTitle="par3">
          Par3
        </Par>
        <Par classTitle="par4">
          Par4
        </Par>
        <Par classTitle="par5">
          Par5
        </Par>
      </div>
    );
  }
}
