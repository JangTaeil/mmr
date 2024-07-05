import React from 'react'
import { Col } from 'antd';
import { Card } from 'antd';

const AntCard = (props) => {
  const { Meta } = Card;

    return (
      // GridCard 1개가 열 몇칸 쓰겠다는 소리.
      <Col lg={4} md={6} sm={12} xs={24}>
        <Card 
          hoverable 
          style={{width: '100%'}}
          cover={<div>
            <img
            style={{width:'100%'}}
            src={props.path}
            alt={props.title}
            />
        </div>}>
        <Meta title={props.castName} /> 
        </Card>
      </Col>
    )
  }

export default AntCard;

