import React from 'react';
import Footer from './Footer';
import Particle from './Particle';

function NotFound() {

  return (
    <React.Fragment>
      <div style={{textAlign:'center'}}>
        <aside>
          <img style={{maxWidth:'90vw',marginTop:'4vh'}} src={require('../assets/404.png')} alt='404' />
        </aside>
        <main style={{maxWidth:'80vw',margin:'auto 10vw'}}>
          <h1 style={{color:'#00ACFF',fontFamily:'Nunito',fontSize:'2.9rem'}}>Sorry!</h1>
          <p style={{color:'#3F3D56',fontFamily:'Nunito',fontSize:'1.2rem'}}>
            Either you aren't cool enough to visit this page or it doesn't exist <em style={{color:'#00ACFF'}}>. . . like your social life.</em>
          </p>
          <button style={{padding:'5px',fontWeight:'bold',fontSize:'1.1rem',letterSpacing:'0.5px',color:'#3F3D56',border:'#000 1px solid',background:'transparent'}}>You can go now!</button>
        </main>
      </div>
       <Footer />
      <div style={{position:'absolute',top:'0',left:'0',width:'100%',height: '100%'}}><Particle /></div>
    </React.Fragment>
  )
};

export default NotFound;