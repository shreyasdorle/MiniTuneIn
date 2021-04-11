import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Tag } from 'antd';

const StationsDetails = ({station}) => {

  return(
    <div className="StationsDetails">
      <Row type="flex" align="middle" justify="space-around">
        <Col><img src={station.imgUrl} height={200} width={200} /></Col>
      </Row>
      <br/>
      <Row type="flex" justify="space-between">
        <Col span={6}>Name:</Col>
        <Col span={16}>{station.name}</Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col span={6}>Description:</Col>
        <Col span={16}>{station.description}</Col>
      </Row>
      <Row type="flex">
        <Col span={6}>Tags:</Col>
        <Col span={16}>{station.tags.map((tag, index) => <Tag key={index} color="cyan">{tag}</Tag>)}</Col>
      </Row>
    </div>
  )
}

StationsDetails.propTypes = {
  station: PropTypes.object
}

export default StationsDetails;