import React from 'react';
import AntCard from '../commons/AntCard';
import { Row } from 'antd';
import { IMAGE_BASE_URL } from '../Config';
import alldata from '../../data/alldata.json'

const ImageList = (props) => {
  return (
    <Row gutter={[10, 10]}>
    {props.map(targets  => {
      // if(cast.profile_path != null)
      return(
        <React.Fragment key={targets.id}>
          {targets.profile_path &&
          <AntCard
          path={`${IMAGE_BASE_URL}w400${alldata.data.targets.id.image.full}`}
          castName={targets.name}
          />
    }
        </React.Fragment>
    );
  })}
  </Row>
  )
}

export default ImageList