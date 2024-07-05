import React from 'react';
import logo2 from '../../images/logo2.png'
import advertise from '../../images/advertise.png'
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { InputNumber, Space } from 'antd';



function LandingPage() {
  // const onChange = (value) => {
  //   console.log('changed', value);
  // };

  return (

    <div>
      <Link to='/'>
        <div style={{ textAlign: "center", margin: '0 auto' }}>
          <img src={logo2} />
        </div>
      </Link>

      <div style={{ textAlign: "center", margin: '0, auto' }}>
        <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '600px', marginRight: '10px' }} />
        <Button htmlType="submit" style={{ border: ' solid #00bfff', color: '#00bfff', fontWeight: 'bold' }}>조회</Button>
      </div>
      <div style={{ textAlign: "center", margin: '30px auto 0 -70px' }}>
        <Space>
          <InputNumber
            min={1}
            max={1}
            defaultValue={'인기 커뮤니티 글'}
            style={{ width: '600px' }}
          />
        </Space>

      </div>
      <div style={{ textAlign: "center", margin: '100px auto 0 auto' }}>
        <img src={advertise} />
      </div>
    </div>

  );


}

export default LandingPage