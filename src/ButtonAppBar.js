import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

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
  }
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <div className={classes.status}></div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography type="title" color="inherit" className={classes.flex}>
            SafeCircle
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);