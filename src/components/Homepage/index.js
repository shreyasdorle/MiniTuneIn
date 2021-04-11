import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStations } from '../../actions/GetStationsActions';
import Header from '../../commonComponents/Header';
import Footer from '../../commonComponents/Footer';
import Error from '../../commonComponents/Error';
import Loading from '../../commonComponents/Loading';
import StationsTable from './StationsTable';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(fetchStations())
  }

  getTagsFromStations(stations){
    let tagsArray = [];
    stations.forEach(station => {
      station.tags.forEach(tag => {
        if(tagsArray.indexOf(tag) === -1){
          tagsArray.push(tag)
        }
      })
    })
    return tagsArray;
  }

  render(){
    if(this.props.loading){
      return <Loading/>
    }

    if(this.props.hasErrors){
      return <Error/>
    }

    const stations = this.props.stations;

    if(stations && stations.length == 0){
      return (
        <div className="homepage">
          <Header/>
          <main className="container">
            No results
          </main>
          <Footer/>
        </div>
      )
    }

    const tags = stations && this.getTagsFromStations(stations) || null;

    return(
      <div className="homepage">
        <Header/>
        <main className="container">
          <StationsTable stations={stations} tags={tags} />
        </main>
        <Footer/>
      </div>
    )
  }
}

Homepage.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  hasErrors: PropTypes.bool,
  stations: PropTypes.array
}

const mapStateToProps = state => ({
  loading: state.stations.loading,
  hasErrors: state.stations.hasErrors,
  stations: state.stations.data || null
})

export default connect(mapStateToProps)(Homepage)