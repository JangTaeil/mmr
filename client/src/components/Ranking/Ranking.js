import { Button, Input } from 'antd';
import advertise2 from '../../images/advertise2.png';
import champ from '../../images/champ.png';
import advertise3 from '../../images/advertise3.PNG'

const Detail = () => {

  return (
    <div>
      <div style={{ margin: '50px auto', textAlign: 'center' }}>
        <Input placeholder='검색 : 플레이어 닉네임' style={{ width: '800px', height: '4rem'}} />
        <Button htmlType="submit" style={{ marginLeft: '10px', border: ' solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '15px 15px' }}>조회</Button>
      </div>

      <div style={{display: 'flex' }}>
        <div>
          <img src={advertise2}
            style={{margin:'170px 0 0 30px', width:'300px'}} />
        </div>
        <div style={{width:'1500px'}}>
          <img src={champ}
            style={{}} />
        </div>
        <div style={{marginRight:"170px"}}>
          <img src={advertise3} style={{width:'200%'}}/>
        </div>
      </div>
    </div>
  )
}

export default Detail