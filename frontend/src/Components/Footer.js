import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: '60px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box>
          <Typography variant="body2" color="textSecondary" align="center">
            Vidhan Shah © VChat 2020
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};