import React from 'react';
import logo2 from '../../images/logo2.png'
import advertise from '../../images/advertise.png'
import { Button, Input, Select } from 'antd';
import { Link } from 'react-router-dom';

function LandingPage() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const options = [];
  return (

    <div>
      <Link to='/'>
        <div style={{ textAlign: "center", margin: '0 auto' }}>
          <img src={logo2} />
        </div>
      </Link>
      {/* <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '0, auto',
        height: '100px',
        flexDirection : 'row',
        justifyContent: 'center', 
      }}> */}
      <div style={{ textAlign: "center", margin: '0, auto' }}>
        <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '600px', marginRight: '10px' }} />
        <Button htmlType="submit" style={{ border: ' solid #00bfff', color: '#00bfff', fontWeight: 'bold' }}>조회</Button>
      </div>
      <div style={{ textAlign: "center", margin: '30px auto 0 -70px'}}>
        <Select
          mode="tags"
          onChange={handleChange}
          tokenSeparators={[',']}
          options={options}
          style={{ width: '600px', margin: '0 auto' }}/>
      </div>
      <div style={{ textAlign: "center", margin: '100px auto 0 auto' }}>
        <img src={advertise} />
      </div>
    </div>

  );


}

export default LandingPage