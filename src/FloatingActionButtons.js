import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Map from 'material-ui-icons/Map';
import Favorite from 'material-ui-icons/Favorite';
import ModeEdit from 'material-ui-icons/ModeEdit';

const styleSheet = createStyleSheet('FloatingActionButtons', theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff'
  },
  buttonOne: {
    background: '#9C27B0'
  },
  buttonTwo: {
    background: '#673AB7'
  },
  buttonThree: {
    background: '#3F51B5'
  },
  buttonFour: {
    background: '#2196F3'
  }
}));

function FloatingActionButtons(props) {
  const classes = props.classes;
  return (
    <div className="action-buttons">
      <Button fab color="accent" className={classes.button, classes.buttonOne}>
        <AccountCircle />
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button fab color="accent" className={classes.button, classes.buttonTwo}>
        <Map />
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button fab color="accent" className={classes.button, classes.buttonThree}>
        <Favorite />
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button fab color="accent" className={classes.button, classes.buttonFour}>
        <ModeEdit />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(FloatingActionButtons);