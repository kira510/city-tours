import React from 'react';
import './Tours.scss';

export default class Tours extends React.Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  render () {
    const {id, city, img, name, info} = this.props.tour;
    const {removeTour} = this.props;
    return (
        <article className="tour">
          <div className='img-container'>
            <img src={img} 
            alt="" />
            <span className="close-btn" onClick={()=>{removeTour(id)}}>
              <i className="fas fa-window-close" />
            </span>
          </div>
          <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>info{" "}
              {!this.state.showInfo && <span onClick={this.handleInfo}><i className="fas fa-caret-square-down" /></span>}
              {this.state.showInfo && <span onClick={this.handleInfo}><i className="fas fa-caret-square-up" /></span>}
            </h5>
          </div>
          {this.state.showInfo && <p>{info}</p>}
        </article>
    );
  }
}