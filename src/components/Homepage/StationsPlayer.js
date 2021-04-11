import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';
import StationsDetails from './StationsDetails';

const StationsPlayer = ({station}) => {
  if(!station){
    return (
      <Row type="flex" align="middle" justify="center">
        <Col>
          <h4>Click on table row to play station</h4>
        </Col>
      </Row>
    )
  }

  useEffect(()=>{
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    source.src = station.streamUrl;
    audio.load(); //call this to just preload the audio without playing
    audio.play();
    return () => {
      $(source).on("error", function () {
        console.log('ERROR Playing the file!')
      });
    }
  },[station])

  return(
    <div className="StationsPlayer">
      <Row type="flex" align="middle" justify="center">
        <Col>
          <audio id="audio" controls autoPlay>
            <source id="audioSource"/>
          </audio>
          </Col>
      </Row>
      <br/>
      <br/>
      <StationsDetails station={station}/>
    </div>
  )
}

StationsPlayer.propTypes = {
  station: PropTypes.object
}

export default StationsPlayer;