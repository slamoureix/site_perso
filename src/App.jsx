import React, {useState, useEffect} from 'react';
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
  const Title = 'Sebastien Lamoureix Designer && Développeur Front-End';
  
  const PositionCursor = {
    pageY : 0,
    pageX : 0
  };
  const [postionCursorState, setPostionCursor] = useState(PositionCursor);

  const ObjRoutes = useSelector(({AllRoutesReducer}) => ({...AllRoutesReducer}));

  useEffect(() => {
      const setMousePosition = (e, positionCursorState) => {
        e.preventDefault();
        
        setPostionCursor(() => {
          return {
            ...positionCursorState,
            pageY: e.pageY,
            pageX: e.pageX
          }
        })
      }
    document.addEventListener('mousemove', setMousePosition);
    // animaLoadHomePage();
    return () => {
      document.removeEventListener('mousemove', setMousePosition);
    }
  }, []);


  
  
  return (
  <DocumentTitle title= {Title}>
    <Router>
      <>
        {/* <div className= "circle_transition"/>  */}

        <Cursor Position = {postionCursorState}/>

            {/* composant qui gère le scroll vers le top */ }
            <ScrollToTop/>

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


