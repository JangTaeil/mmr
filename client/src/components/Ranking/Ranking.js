import { Button, Input, Row } from 'antd';
import advertise2 from '../../images/advertise2.png';
import champ from '../../images/champ.png';
import advertise3 from '../../images/advertise3.PNG'
import alldata from '../../data/alldata.json'
import AntCard from '../commons/AntCard';
import React from 'react';
import { IMAGE_BASE_URL } from '../Config';
import { useState } from 'react';
import { Card } from 'antd';

const Ranking = () => {

  const [Champion, setCampion] = useState([]);
  const { Meta } = Card;

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
        <div style={{ width: '1500px' }}>
          {/* <img src={champ}
            style={{}} /> */}
          {/* <Row gutter={[10, 10]}>
            {alldata.map(cham => {
              return (
                <React.Fragment key={cham.id}>
                  <AntCard
                    landingPage
                    img={cham.image}
                    title={cham.title}
                    movieId={cham.id}
                  />
                </React.Fragment>
              );
            })}
          </Row> */}
          <img src={`${IMAGE_BASE_URL}/${alldata.data.Aatrox.image.full}`}/>
          {/* <Meta title={`${alldata.data.Aatrox.name}`} /> */}
          <img src={`${IMAGE_BASE_URL}/${alldata.data.Ahri.image.full}`}/>
          <img src={`${IMAGE_BASE_URL}/${alldata.data.Akali.image.full}`}/>
        </div>
        <div style={{ marginRight: "170px" }}>
          <img src={advertise3} style={{ width: '200%' }} />
        </div>
      </div>
    </div>
  )
}

export default Ranking