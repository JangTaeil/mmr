import { Button, Layout, Menu, Col } from 'antd';
import React from 'react';
import logo3 from '../../images/logo3.PNG'
import { Link } from 'react-router-dom';


const { Header } = Layout;
const buttonstyle = {
  backgroundColor: '#00bfff',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '22px',
  display: 'inline-block',
  height: '4rem',
  width: '250px',
  margin: '0 5px',
  textAlign: 'center'
}

const NavBar = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0, auto',
          height: '100px',
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}
      >
        <div>
          <Link to="/">
            <img
              src={logo3}
              alt="map logo"
              style={{ position: 'relative', top: '15px', right: '50px', width: '100px' }} />
          </Link>
        </div>

        <Menu
          className="nav-menu"
          theme="light"
          mode="horizontal"
          style={{
            flex: 1,
            justifyContent: 'space-around',
            width: '100px',
            border: 'none',
            margin: 'o, auto'
          }}
        >
          <Link to="/">
            <Menu.Item key="홈" style={buttonstyle}>홈</Menu.Item>
          </Link>

          {/* <Link to="/ranking">
            <Menu.Item key="챔피언 랭킹" style={buttonstyle}>챔피언 랭킹</Menu.Item>
          </Link> */}
          <a href='/ranking'>
            <Menu.Item key="챔피언 랭킹" style={buttonstyle}>
              챔피언 랭킹
            </Menu.Item>
          </a>

          <Link to="/#">
            <Menu.Item key="유저 랭킹" style={buttonstyle}>유저 랭킹</Menu.Item>
          </Link>

          <Link to="/#">
            <Menu.Item key="유료 시스템" style={buttonstyle}>유료 시스템 </Menu.Item>
          </Link>

          <Link to="/#">
            <Menu.Item key="커뮤니티" style={buttonstyle} >커뮤니티</Menu.Item>
          </Link>

        </Menu>

        <Button style={{ backgroundColor: '#00bfff' }}>로그인</Button>

      </Header>
    </Layout>

  );
};
export default NavBar;