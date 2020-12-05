import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Grid, Toolbar, Box } from '@material-ui/core';
import axios from 'axios';
import '../../App.css';
import useAuth from '../useAuth';
import Footer from '../Footer';
import Particle from '../Particle';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    background: '#fff',
  },
  appbar: {
    background: 'none',
    marginBottom: '3vh',
  },
  appbarTitle: {
    margin: '1.5vw 0 0 1vw',
    fontFamily: 'Nunito',
    color: '#3F3D56',
    fontSize: '3rem',
    cursor: 'default',
  },
  img: {
    maxHeight: '80vh',
    maxWidth: '100%',
  },
  imgWrapper: {
    marginTop: '5vw',
  },
  highlight: {
    color: '#00ACFF',
  },
  button: {
    width: '80% !important',
    maxWidth: '225px !important',
    padding: '5px',
    fontWeight: 'bold !important',
    letterSpacing: '0.5px !important',
    color: '#3F3D56 !important',
    border: '#000 1px solid !important',
    background: 'transparent !important',
    zIndex: '1100 !important',
  },
  position: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
}));

function Home() {
  // const [userDetails,setUserDetails] = useState({});
  const [authorise, unauthorise, ProtectedRoutes] = useAuth();
  const history = useHistory();

  const responseGoogle = async (response) => {
    if(!response.error) {
      const res = await axios.post('http://localhost:9000/', { 
        email:response.wt.cu,
        name:response.wt.Ad,
        dp:response.wt.SJ,
      })
      await authorise(res);
      history.push('/chat'); 
    }
  };

  const classes = useStyles();
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
        </Grid>
        <Footer />
    </div>
    <div className={classes.position}><Particle /></div>
    </React.Fragment>
  )
};

export default Home;