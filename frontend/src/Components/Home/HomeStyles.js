import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#fff',
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