import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51J3dfCSJ9P4UWuupmHvAmqJMTgjBQBZm2fkXzm8jpx45rBXdIfqjg6kdN1EV9ycIgORONbhxhIvhb4sJgv8ZEFhc00NXAsIEBR');

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
          dispatch({
            type:'SET_USER',
            user:null
          })
      }
    })
  },[])  //empty brackets at the end mean that this function will only run once  when the app component loads

  return (

    <Router>
      <div className="app">
            
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            
          </Route>
          
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>

          {/* The Default Route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
          
      </div>

    </Router>
    
  );
}

export default App;
