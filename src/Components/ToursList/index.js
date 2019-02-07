import React from 'react';
import './ToursList.scss';
import Tours from '../Tours/Tours';
import {tourData} from '../tourData';

export default class ToursList extends React.Component {
  state = {
    tours: tourData
  }

  removeTour = (id) => {
    const {tours} = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  }

  render () {
    return (
      <section className="tourlist">
        {this.state.tours.map(tour => {
          return <Tours key={tour.id} tour={tour} removeTour={this.removeTour}/>
        })}
      </section>
    );
  }
}