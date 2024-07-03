import { Button, Input } from 'antd';
import advertise2 from '../../images/advertise2.png';
import champ from '../../images/champ.png';

const Detail = () => {
  
  return (
    <div style={{ width: '100%' }}>
        <div>
        <p style={{ position: 'relative', top: '40px', right: '-350px' }}>
          <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '600px' }}/>
          <Button htmlType="submit" style={{marginLeft: '10px', border: ' solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '15px 15px'}}>조회</Button>        
        </p>
      </div>
      <img
        src={advertise2}
        style={{position: 'relative', top: '140px', left: '80px', width: '130px'}}/>
      <img
        src={champ}
        style={{position: 'relative', top: '150px', left: '200px', width: '230px'}}/>

    </div>
  )
}

export default Detail