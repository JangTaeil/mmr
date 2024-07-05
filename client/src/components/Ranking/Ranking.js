import React from 'react';
import { Button, Input } from 'antd';
import advertise2 from '../../images/advertise2.png';
import advertise3 from '../../images/advertise3.PNG';
import alldata from '../../data/alldata.json';
import { IMAGE_BASE_URL } from '../Config';

const Ranking = () => {
  // 객체에서 배열 형태로 변환
  const data_list = Object.values(alldata.data);

  return (
    <div>
      <div style={{ margin: '50px auto', textAlign: 'center' }}>
        <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '800px', height: '4rem' }} />
        <Button htmlType="submit" style={{ marginLeft: '10px', border: 'solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '15px 15px' }}>조회</Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {/* 좌측 광고 이미지 */}
        <div style={{ marginRight: '20px' }}>
          <img src={advertise2} alt="좌측 광고 이미지" style={{ width: '300px' }} />
        </div>

        <div style={{ width: 'calc(100% - 620px)', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {data_list.map((champion, index) => (
            <div>
              <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px', width: '100px' }}>
                <img src={`${IMAGE_BASE_URL}/${champion.image.full}`} alt={`챔피언 ${champion.name} 이미지`} style={{ width: '48px', height: '48px', marginRight: '10px' }} />
              </div>
              <span>{champion.name.length > 6 ? champion.name.substring(0, 4) + "..." : champion.name}</span>
            </div>
          ))}
        </div>

        {/* 우측 광고 이미지 */}
        <div style={{ marginLeft: 'auto' }}>
          <img src={advertise3} alt="우측 광고 이미지" style={{ width: '300px' }} />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
