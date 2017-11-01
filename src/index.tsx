import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import { CarsData } from './data';

import { Car, CarDetails } from './Car';
import { Main, Home, About } from './Common';


ReactDOM.render(
  <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/cars" render={(props: any) => <Car data={CarsData} {...props} />} />
          <Route exact path="/cars/:id" render={(props: any) => <CarDetails data={CarsData} {...props} />} />
          <Route exact path="/about" render={() => <About />} />
        </Switch>        
      </Main>  
  </BrowserRouter>,
  document.getElementById('root')
);
{/* exact is manditory */}