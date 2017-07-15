// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import WelcomeImage from './img/usa-and-india-flag.jpg';

const styleSheet = createStyleSheet('WelcomeCard', {
  content: {
    padding: 12
  }
});

function WelcomeCard(props) {
  const classes = props.classes;
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardMedia>
          <img src={WelcomeImage} className="welcome-image" alt="Contemplative Reptile" />
        </CardMedia>
        <CardContent className={classes.content}>
          <h4>Immigrants! Welcome to your local Indian Inner Circle</h4>
          <ol>
            <li>A popular Indian restaurant near you: <a href="/index.html?current=map&mapType=markerSingle&coord=40.749197,-73.890355"><strong>Samudra Restaurant</strong></a></li>
            <li>To, open a bank account, go to: <a href="/index.html?current=map&mapType=markerSingle&coord=40.747246,-73.890269"> <strong>Chase Bank</strong></a></li>
            <li>The nearest grocery or pharmacy is: <a href="/index.html?current=map&mapType=markerSingle&coord=40.748107,-73.891217"> <strong>Little India</strong></a></li>
          </ol>
        </CardContent>
        <Button dense color="primary" onClick={props.onClick}>
          OK!
        </Button>
      </Card>
    </div>
  );
}

WelcomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default withStyles(styleSheet)(WelcomeCard);