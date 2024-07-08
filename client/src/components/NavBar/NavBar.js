import { Button, Layout, Menu } from 'antd';
import React from 'react';
import logo3 from '../../images/logo3.PNG'
import { Link, useNavigate } from 'react-router-dom';




const { Header } = Layout;
const buttonstyle = {
  backgroundColor: '#00bfff',
  borderRadius: '10px',
  color: '#fff',
  fontSize: '15px',
  display: 'inline-block',
  lineHeight: '50px',
  width: '130px',
  margin: '0 5px',
  textAlign: 'center'
}

const NavBar = () => {
  const navigate = useNavigate();


  return (
    <Layout style={{ backgroundColor: '#fff', margin: '0, auto' }}>
      <div>
      <Header
        style={{
          width: '1000px',
          display: 'flex',
          alignItems: 'center',
          height: '100px',
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent:  'space-around',
          margin: '0, auto',
          textAlign: 'center'
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
            flex:'6',
            justifyContent: 'center',
            width: '100px',
            border: 'none',
            margin: '0, auto',
            textAlign:'center'
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
      </div>
    </Layout >

  );
};
export default NavBar;