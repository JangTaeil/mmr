import { Button, Layout, Menu } from 'antd';
import React from 'react';
import logo from '../../images/logo.png'


const { Header } = Layout;


const NavBar = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <a href='/'>
          <img
            src={logo}
            alt="map logo"
            style={{position: 'relative', top: '15px', right: '50px', width: '100px'}}/>
            </a>
      </div>
      <Menu
        className="nav-menu"
        theme="light"
        mode="horizontal"
        style={{
          flex: 1,
          justifyContent: 'space-around',
          minWidth: '900px',
          width: '900px',
          border: 'none'
        }}
      >
        <Menu.Item key="홈">
          <a href="/">홈</a>
        </Menu.Item>
        <Menu.Item key="챔피언 랭킹">
          <a href="/ranking">챔피언 랭킹</a>
        </Menu.Item>
        <Menu.Item key="유저 랭킹">
          <a href="/">유저 랭킹</a>
        </Menu.Item>
        <Menu.Item key="유료 시스템">
          <a href="/">유료 시스템</a>
        </Menu.Item>
        <Menu.Item key="커뮤니티">
          <a href="/">커뮤니티</a>
        </Menu.Item>
      </Menu>

      <Button style={{ backgroundColor: '#00bfff'}}>로그인</Button>

    </Header>
  </Layout>

  );
};
export default NavBar;