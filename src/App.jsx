import React, {
  useState, useEffect, 
} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Cursor from './components/Cursor/Cursor';
import { useSelector } from 'react-redux';
import DocumentTitle from 'react-document-title';

// import {animaLoadHomePage} from '../src/js/script.js';



export default function App() {
  const Title = 'Sebastien Lamoureix Designer && Développeur Front-End'
  // const PositionCursor = {
  //   pageY : 0,
  //   pageX : 0
  // };
  // const [postionCursorState, setPostionCursor] = useState(PositionCursor);
  // const setMousePosition = (e, positionCursorState) => {
  //   setPostionCursor(() => { return {
  //     ...positionCursorState, pageY : e.pageY, pageX : e.pageX  
  //   }
  //   })
  // }

  const ObjRoutes = useSelector(state => ({...state.RoutesReducer}));

  useEffect(() => {
    // document.addEventListener('mousemove', setMousePosition);
    // animaLoadHomePage();
    return () => {
      // document.removeEventListener('mousemove', setMousePosition);
    }
  }, []);
  
  
  return (
    <DocumentTitle title= {Title}>
      <div className= "App">
      <div className= "circle_transition"/>
      {/* <Cursor Position = {postionCursorState}/> */}
          <Router>
          <Header/>
          <Switch>
          {CreateRoutes(ObjRoutes)}
          </Switch>
          <Footer/>
          </Router>
          </div>
    </DocumentTitle>
  )

  function CreateRoutes(ObjRoutes) {
    let ArrRoutes = [];
    for (let prop of Object.keys(ObjRoutes)) {
      let TypeRoute = ObjRoutes[prop];
      for (let name of Object.keys(TypeRoute)) {
        let Routes = TypeRoute[name];
        let route = <Route key={Routes.path} exact path={Routes.path} component= {Routes.component} />
        ArrRoutes.push(route);
      }
    }
    return ArrRoutes
  }
}


