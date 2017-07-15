import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Home from 'material-ui-icons/Home';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Dominican from './img/country_flags/do.png';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  status: {
    height: 30,
    backgroundColor: '#E53935'
  },
  toolbar: {
    backgroundColor: '#F44336'
  },
  home: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "-2px"
  }
});

function ButtonAppBar(props) {
  const current = window.location.search.match(/current=([^&]+)/) ? window.location.search.match(/current=([^&]+)/).pop() : 'index';
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <div className={classes.status}></div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {
            current === 'index' ? null : (
              <IconButton color="contrast" aria-label="Home" onClick={jumpToHome}>
                <Home className={classes.home}/>
              </IconButton>
            )
          }
          <Typography type="title" color="inherit" className={classes.flex}>
            InnerCircle
          </Typography>
          <Avatar alt="Flag" src={Dominican} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

function jumpToHome(e) {
  e.preventDefault();

  window.location.href = '/';
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);