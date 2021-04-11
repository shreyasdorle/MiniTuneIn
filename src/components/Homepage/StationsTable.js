import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table, Rate, Tag } from 'antd';
import StationsPlayer from './StationsPlayer';

const { CheckableTag } = Tag;

const columns = [
  {
    title: '',
    dataIndex: 'imgUrl',
    render: function displayImage(imgUrl) {
      return <img src={imgUrl} height={50} width={50} />
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Popularity',
    dataIndex: 'popularity',
    sorter: {
      compare: (a, b) => a.popularity - b.popularity
    },
    render: function displayRating(popularity) {
      return <Rate disabled value={popularity} />
    }
  },
  {
    title: 'Reliability',
    dataIndex: 'reliability',
    sorter: {
      compare: (a, b) => a.reliability - b.reliability
    }
  }
];

const StationsTable = ({stations,tags}) => {
  // To add "key" field in data object as per antd Table requirement
  for(const key in stations){    
    stations[key].key = parseInt(key) + 1
  }
  const [data, setData] = useState(stations);
  const [station, setStation] = useState(null);
  const [selectedTags, setSelectedTags] = useState([])

  const onChange = (pagination, filters, sorter) => {
    const field = sorter.field
    if(sorter.order === 'ascend'){
      setData(data.sort((a, b) => a[field] < b[field] ? 1 : -1))
    }else{
      setData(data.sort((a, b) => a[field] > b[field] ? 1 : -1))
    }
  }

  const onRowClick = (record) => {
    setStation(record);
  }

  const filterByTag = (tag, checked, stations) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);

    // Filter the Data (using stations as that prop is not changing)
    let filterData = stations;
    for(let i in nextSelectedTags){
      console.log(nextSelectedTags[i])
      filterData = filterData.filter((val) => {
        if(val.tags.indexOf(nextSelectedTags[i]) !== -1){
          return val
        }
      })
    }
    setData(filterData)
  }

  return(
    <div className="StationsTable">
      <div className="categories">
        <h3 style={{ marginRight: 8 }}>Categories: <span style={{fontSize: '12px'}}>(click to filter)</span></h3>
        {tags.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => filterByTag(tag, checked,stations)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
      <Row type="flex" justify="space-between">
        <Col span={24} lg={{span: 8, order: 2}} style={{marginBottom: '40px'}}>
          <StationsPlayer station={station}/>
        </Col>
        <Col span={24} lg={{span: 14, order: 1}} style={{marginBottom: '40px'}}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            onChange={onChange}
            onRow={(record) => {
              return {
                onClick: () => {onRowClick(record)}
              };
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

StationsTable.propTypes = {
  stations: PropTypes.array,
  tags: PropTypes.array
}

export default StationsTable;