import { Button, Input } from 'antd';
import React from 'react';
import alldata from '../../data/alldata.json';
import advertise2 from '../../images/advertise2.png';
import advertise3 from '../../images/advertise3.PNG';
import { IMAGE_BASE_URL } from '../Config';
import { Card } from 'antd';

const { Meta } = Card;  

const Ranking = () => {

  const data_list = Object.values(alldata.data);

  return (
    <div>
      <div style={{ margin: '50px auto', textAlign: 'center' }}>
        <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '800px', height: '4rem' }} />
        <Button htmlType="submit" style={{ marginLeft: '10px', border: ' solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '15px 15px' }}>조회</Button>
      </div>

      <div style={{ display: 'flex' }}>
        <div>
          <img src={advertise2}
            style={{ margin: '170px 0 0 30px', width: '300px' }} />
        </div>

        <div style={{ width: '1500px', display: 'flex', flexWrap: 'wrap' }}>
        {data_list.map((champion, index) => (
             <Card
             hoverable
             style={{
               width: 200,
             }}
             cover={<img key={index} src={`${IMAGE_BASE_URL}/${champion.image.full}`} alt={`챔피언 ${champion.name} 이미지`} style={{ width: '48px', height: '48px', margin: '3px' }} /> }>
              <Meta title={`${champion.name}`}/>
             </Card>
          ))}
        </div>
        <div style={{ marginRight: "170px" }}>
          <img src={advertise3} style={{ width: '200%' }} />
        </div>
      </div>
    </div>
  )
}

export default Ranking