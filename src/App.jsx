import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { useSelector } from 'react-redux';
import DocumentTitle from 'react-document-title';


import {CreateRoutes} from './scripts/CreateRoutes';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

// import {animaLoadHomePage} from '../src/scripts/animLoad';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';



export default function App() {
  const Title = 'Sebastien Lamoureix Designer && Développeur Front-End'
  const ObjRoutes = useSelector(({AllRoutesReducer}) => ({...AllRoutesReducer}))

  // useEffect(() => {
  //   // animaLoadHomePage();

  // }, []);


  
  
  return (
  <DocumentTitle title= {Title}>
    <Router>
      <>
        <Cursor/> 
        {/* composant qui gère le scroll vers le top */ }
        <ScrollToTop/>

        {/* <div className= "circle_transition"/>  */}
            <Header/>
              <Switch>
                {CreateRoutes(ObjRoutes)}
              </Switch>
            <Footer/>
      </>
    </Router>
  </DocumentTitle>
)
}


