import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    
    constructor(){
        super();
        this.state = {
            showInfo: false
        }
    }

    showInfoHandler = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }
    
    render() { 
        // console.log(this.props);
        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        const { showInfo } = this.state;
        return ( 
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={name} />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{ city }</h3>
                    <h4>{ name }</h4>
                    <h5>info 
                        <span onClick={ this.showInfoHandler }>
                            <i className="fas fa-caret-down"></i>
                        </span>
                    </h5>
                    {showInfo ? <p className="fade-in">{info}</p> : '' }
                    
                </div>
            </article>
        );
    }
}
 
export default Tour;