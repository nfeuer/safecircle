import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Map from 'material-ui-icons/Map';
import Message from 'material-ui-icons/Message';
import Assignment from 'material-ui-icons/Assignment';
import Library_Books from 'material-ui-icons/LibraryBooks'

const styleSheet = createStyleSheet('CircleCard2', theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff'
  },
  buttonOne2: {
    color: '#9C27B0'
  },
  buttonTwo2: {
    color: '#673AB7'
  },
  buttonThree2: {
    color: '#3F51B5'
  },
  buttonFour2: {
    color: '#2196F3'
  },
  goRight: {
      float: 'right'
  }
}));

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2">
            New York - City
          </Typography>
          
        </CardContent>
        <CardActions className={classes.goRight}>
          <IconButton className={classes.button, classes.buttonOne2} aria-label="Message">
            <Message />
          </IconButton>
          <IconButton className={classes.button, classes.buttonTwo2} aria-label="Assignment">
            <Assignment />
          </IconButton>
          <IconButton className={classes.button, classes.buttonThree2} aria-label="Library_Books">
            <Library_Books />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleMediaCard);