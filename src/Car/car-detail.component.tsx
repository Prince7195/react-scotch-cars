import * as React from 'react';
import { Link } from 'react-router-dom';

import car from '../models/car';

class CarDetails extends React.Component {
    public props:any;
    render() {
        let carsData: Array<car> = this.props.data;
        let id: number = this.props.match.params.id;
        let selectedCar: any = carsData.filter(
            (car: car) => {
                if(car.id == id) {
                    return car;
                }
                return null;
            }
        );
        return (
            <div>
                <h1>{selectedCar[0].name}</h1>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-responsive" src={selectedCar[0].media} alt={selectedCar[0].name}/>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li><strong>Model</strong>: {selectedCar[0].model}</li>
                            <li><strong>Make</strong>: {selectedCar[0].make}</li>
                            <li><strong>Year</strong>: {selectedCar[0].year}</li>
                            <li><strong>Price</strong>: {selectedCar[0].price}</li>
                        </ul>
                        <button className="btn btn-primary">
                            <Link to="/cars" className="back-button">Back</Link>
                        </button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CarDetails;