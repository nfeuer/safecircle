import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Group from 'material-ui-icons/Group';
import Animation from './Animation';
const styleSheet = createStyleSheet('CircleCard3', theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff'
  },
  goRight: {
      float: 'right'
  },
  people: {
    color: '#2196F3'
  },
  span: {
    fontSize: '25px'
  },
  join: {
    background: "#64DD17",
    color: "#fff"
  },
  later: {
    background: "#0091EA",
    color: "#fff"
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
            New York - City All
          </Typography>
          <IconButton className={classes.button, classes.people} aria-label="Group">
            <Group className={classes.group}/>
          </IconButton>
          <span className={classes.span}>10k</span>
        </CardContent>
        <CardActions className={classes.goRight}>
          <Button raised className={classes.join} >
            Join
          </Button>
          <Button raised className={classes.later}>
            Later
          </Button>
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