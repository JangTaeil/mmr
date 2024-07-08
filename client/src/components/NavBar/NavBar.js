import { Button, Layout, Menu } from 'antd';
import React from 'react';
import logo3 from '../../images/logo3.PNG'
import { Link, useNavigate } from 'react-router-dom';

const { Header } = Layout;
const buttonstyle = {
  backgroundColor: '#00bfff',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '22px',
  display: 'inline-block',
  height: '60px',
  width: '150px',
  margin: '0 5px',
  textAlign: 'center',
  
}

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ backgroundColor: '#fff', width:'1200px', margin: '0 auto' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0, auto',
          height: '100px',
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'center'
        }}
      >
        <div>
          <Link to="/">
            <img
              src={logo3}
              alt="map logo"
              style={{ position: 'relative', top: '15px', width: '100px' }} />
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
          <Menu.Item key="홈" style={buttonstyle} onClick={() => navigate('/')}>
            홈
          </Menu.Item>
          <Menu.Item key="챔피언 랭킹" style={buttonstyle} onClick={() => navigate('/champranking')}>
            챔피언 랭킹
          </Menu.Item>
          <Menu.Item key="유저 랭킹" style={buttonstyle} onClick={() => navigate('/userranking')}>
            유저 랭킹
          </Menu.Item>
          <Menu.Item key="유료 시스템" style={buttonstyle} onClick={() => navigate('/system')}>
            유료 시스템
          </Menu.Item>
          <Menu.Item key="커뮤니티" style={buttonstyle} onClick={() => navigate('/comunity')}>
            커뮤니티
          </Menu.Item>
        </Menu>

        <Button style={{ backgroundColor: '#00bfff' }}>로그인</Button>

      </Header>
    </Layout >

  );
};
export default NavBar;