import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { CssBaseline, Grid, Box } from '@material-ui/core';
import axios from 'axios';
import Sidebar from './Sidebar';
import ChatComponent from './ChatComponent';
import { useChatStyles } from './ChatStyles';

function Chat() {
  const { chatId } = useParams();

  const [user,setUser] = useState({name:'',email:'',dp:''});
  const [isLoading,setLoading] = useState(true);
  const [isEditing,setEditing] = useState(false);

  const fetchData = async () => {
    const res = await axios.post('http://localhost:9000/userInfo', { 
      email: user.email,
    });
  };

  useEffect(() => {
    setLoading(false);
  },[chatId])

  const getData = () => {
    let data = localStorage.getItem('myData');
    data = JSON.parse(data);
    const { name, email, dp } = data.data;
    setUser({name:name,email:email,dp:dp});
  };

  useEffect(() => {
    getData();
  },[isLoading])

  useEffect(() => {
    fetchData();
  },[isEditing])

  const classes = useChatStyles();

  return (
    <React.Fragment>
      {/* Chat {user.name} {user.email} {user.dp} */}
      <div className={classes.root}>
        <CssBaseline />
        {/* For small screen sizes */}
        <Box display={{xs:'block',sm:'none'}} className={classes.smContainer}>
          <Router>
            <Switch>
              <Route exact path='/chat'>
                <Sidebar user={user} />
              </Route>
              <Route exact path={`/chat/:chatId`}>
                <ChatComponent user={user} />
              </Route>
              <Route path={`/chat/group/:grpId`}>
                <ChatComponent user={user} />
              </Route>
            </Switch>
          </Router>
        </Box>
        {/* Fpr large screen sizes */}
        <Box display={{xs:'none',sm:'block'}} className={classes.lgContainer}>
          <Grid container justify={'center'}>
            <Grid item sm={3}>
              <Sidebar user={user} />
            </Grid>
            <Grid item sm={7}>
              <Router>
                <Switch>
                  <Route exact path='/chat'>
                    <ChatComponent user={user} />
                  </Route>
                  <Route exact path={`/chat/:chatId`}>
                    <ChatComponent user={user} />
                  </Route>
                  <Route path={`/chat/group/:grpId`}>
                    <ChatComponent user={user} />
                  </Route>
                </Switch>
              </Router>
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  )
};

export default Chat;