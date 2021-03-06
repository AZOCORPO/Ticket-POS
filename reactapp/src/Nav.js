import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import {Menu, Icon} from 'antd'

function Nav() {

  return (
    <nav >
      <Menu style={{textAlign: 'center'}} mode="horizontal" theme="dark">

        <Menu.Item key="mail">
          <Link to="/">
            <Icon type="home" />
            Print
          </Link>
        </Menu.Item>

        <Menu.Item key="test">
          <Link to="/tools">
            <Icon type="tool" />
            Tools
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

export default Nav;
