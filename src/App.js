import React from 'react';
import { Route, Switch} from 'react-router-dom';
import DashboardHeader from './components/shared/header/DashboardHeader';
import SideBar from './components/shared/side-bar/SideBar';
import Container from './components/container/Container';
import Customers from './components/container/customers/Customers';
import './App.css';

const App = () => {

  return (
    <div style={{display:'flex'}}> 
      <SideBar/>
      <div style={{width:'100%'}}>
        <DashboardHeader/>
        <Switch>
          <Route exact path="/" component={Container}/>
          <Route exact path="/customers" component={Customers}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
