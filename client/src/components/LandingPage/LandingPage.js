import React, { useState } from 'react';
import logo2 from '../../images/logo2.png'
import advertise from '../../images/advertise.png'
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { InputNumber, Space } from 'antd';



function LandingPage() {

  const [displayText, setDisplayText] = useState('인기 커뮤니티 글');
  const [currentValue, setCurrentValue] = useState(1);

  // 증가 버튼 핸들러
  const handleIncrease = () => {
    if (currentValue < 3) {
      setCurrentValue(currentValue + 1);
    }
    updateDisplayText(currentValue + 1);
  };

  // 감소 버튼 핸들러
  const handleDecrease = () => {
    if (currentValue > 1) {
      setCurrentValue(currentValue - 1);
    }
    updateDisplayText(currentValue - 1);
  };

  const updateDisplayText = (value) => {
    if (value === 1) {
      setDisplayText('인기 커뮤니티 글');
    } else if (value === 2) {
      setDisplayText('베스트 인기글');
    }
  };


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
      <div style={{ textAlign: "center", margin: '30px auto' }}>
        <Input value={displayText} style={{ width: '600px' }} readOnly />
        <Button onClick={handleIncrease} style={{ margin: '10px' }}>🔼</Button>
        <Button onClick={handleDecrease}>🔽</Button>
      </div>

      <div style={{ textAlign: "center", margin: '100px auto 0 auto' }}>
        <img src={advertise} alt="Advertisement" />
      </div>
    </div>

  );


}

export default LandingPage