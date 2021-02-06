import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { AppBar, CssBaseline, Grid, Toolbar, Box } from '@material-ui/core';
import axios from 'axios';
import { useHomeStyles } from './HomeStyles';
import '../../App.css';
import useAuth from '../useAuth';
import Footer from '../Footer';
import Particle from '../Particle';

function Home() {
  const [authorise, unauthorise, ProtectedRoutes] = useAuth();
  const history = useHistory();

  const responseGoogle = async (response) => {
    const { imageUrl, name, email } = response.profileObj;
    if(!response.error && window.navigator.onLine) {
      const res = await axios.post('http://localhost:9000/', { 
        email: email,
        name: name,
        dp: imageUrl,
      })
      await authorise(res);
      history.push('/chat'); 
    }
  };

  const classes = useHomeStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
          <AppBar className={classes.appbar} elevation={0}>
            <Toolbar>
              <h1 className={classes.appbarTitle}>V<span className={classes.highlight}>Chat</span></h1>
            </Toolbar>
          </AppBar>
          <br />
          <Grid container alignItems={'center'} justify={'center'}>
            <Grid item xs={10} sm={8} md={5}>
              <br />
              <Box display='flex' justifyContent='center' mt="5vh">
                <h5 className='typing'>Frame your Social Space</h5>
              </Box>
              
              <Box display={{xs:'none',md:'block'}}>
                <Box display='flex'>
                  <GoogleLogin
                  clientId="184577954974-pe1kq14kr8179el5q0nkkdhcfkk1iq50.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className={classes.button}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={11} sm={8} md={5} className={classes.imgWrapper}>
              <img src={require('../../assets/landing.png')} alt='landing' className={classes.img} />
              <Box display={{md:'none'}}>
                <br /><br />
                <Box display='flex' justifyContent='center'>
                  <GoogleLogin
                  clientId="583054830011-u116eghlu3pjpdiecckpo5c7uman19ja.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className={classes.button}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Footer />
      </div>
      <div className={classes.position}><Particle /></div>
    </React.Fragment>
  )
};

export default Home;