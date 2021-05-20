import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {CreateRoutes} from './scripts/CreateRoutes';



import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';



export default function App() {

  

  const ObjRoutes = useSelector(({AllRoutesReducer}) => ({...AllRoutesReducer}))

  return (
    <Router>
      <ScrollToTop/> {/* composant qui gère le scroll vers le top */ }
      <Cursor/> 
        <Header/>
          <main>
            <Switch>
            {CreateRoutes(ObjRoutes)}
            </Switch>
          </main>
        <Footer/>
    </Router>
)
}


