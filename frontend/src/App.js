import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css';
import useAuth from './Components/useAuth';
import Chat from './Components/Chat/Chat';
import Posts from './Components/Posts/Posts';
import Status from './Components/Status/Status';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';

function App() {
  const [authorise, unauthorise, ProtectedRoutes] = useAuth();

  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoutes path="/chat"><Chat /></ProtectedRoutes>
          <ProtectedRoutes exact path="/chat/:chatId"><Chat /></ProtectedRoutes>
          <ProtectedRoutes path="/chat/group/:grpId"><Chat /></ProtectedRoutes>
          <ProtectedRoutes path="/posts"><Posts /></ProtectedRoutes>
          <Route exact path="/"><Home /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
