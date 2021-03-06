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
import LibraryBooks from 'material-ui-icons/LibraryBooks';
import Group from 'material-ui-icons/Group';
import Animation from './Animation';
const styleSheet = createStyleSheet('CircleCard2', theme => ({
  button: {

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
  },
  span: {
    fontSize: '25px'
  },
  people: {
    color: '#2196F3'
  },
  group: {
    position: "relative",
    top: "2px"
  }
}));

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
  <Animation>
    <div className="card">
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2">
            New York - City
          </Typography>
          <IconButton className={classes.button, classes.people} aria-label="Group">
            <Group className={classes.group}/>
          </IconButton>
          <span className={classes.span}>1k</span>
        </CardContent>
        <CardActions className={classes.goRight}>
          <IconButton className={classes.button, classes.buttonOne2} aria-label="Message">
            <Message />
          </IconButton>
          <IconButton className={classes.button, classes.buttonTwo2} aria-label="Assignment" onClick={() => {window.location.href = '/index.html?current=posting'}}>
            <Assignment />
          </IconButton>
          <IconButton className={classes.button, classes.buttonThree2} aria-label="Library_Books">
            <LibraryBooks />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  </Animation>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleMediaCard);