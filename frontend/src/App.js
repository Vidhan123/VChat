import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import './App.css';
import useAuth from './Components/useAuth';
import Chat from './Components/Chat/Chat';
import Posts from './Components/Posts/Posts';
import Start from './Components/Start/Start';
import Status from './Components/Status/Status';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const [authorise, unauthorise, ProtectedRoutes] = useAuth();

  return (
    <div>
      <Router>
        {/* 
        <Link to="/">Home</Link>
        <Link to="/start">Start</Link>
        <Link to="/status">Status</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/chat">Chat</Link> 
        */}
        <Switch>
          <Route path="/chat"><Chat /></Route>
          <Route path="/posts"><Posts /></Route>
          <Route path="/status"><Status /></Route>
          <Route path="/start"><Start /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
