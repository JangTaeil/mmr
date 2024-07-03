import React from 'react';
import logo2 from '../../images/logo2.png'
import advertise from '../../images/advertise.png'
import { Button, Input, Select } from 'antd';

function LandingPage() {
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const options = [];
  return (

    <div style={{ width: '100%' }}>
      <a href='/'>
        <img
        src={logo2}
        style={{position: 'relative', top: '110px', left: '600px', width: '100px'}}/>
        </a>
        <div>
        <p style={{ position: 'relative', top: '130px', right: '-350px' }}>
          <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '600px' }}/>
          <Button htmlType="submit" style={{marginLeft: '10px', border: ' solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '15px 15px'}}>조회</Button>
          <Select
            mode="tags"
            style={{ position: 'relative', width: '800px', top:'50px', right:'70px'
            }}
            onChange={handleChange}
            tokenSeparators={[',']}
            options={options}/>
        </p>
      </div>
      <img
        src={advertise}
        style={{position: 'relative', top: '210px', left: '200px', width: '1000px'}}/>
    </div>

  );

 
}

export default LandingPage