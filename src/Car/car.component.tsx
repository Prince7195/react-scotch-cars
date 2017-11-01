import * as React from 'react';
import { Link } from 'react-router-dom';

import car from '../models/car';

class Car extends React.Component {
    public props: any; 

    render() {
        let carsData: Array<car> = this.props.data;
        let carsList: any = carsData.map(
            (car: car) => {
                return (
                    <Link to={"/cars/" + car.id} className="list-group-item" key={car.id} >
                        { car.name }
                    </Link>
                );
            }
        );

        return (
            <div className="container-fluid">
                <h3>Cars List</h3>
                <div className="list-group">
                    {carsList}
                </div>                
            </div>
        );
    }

}

export default Car;