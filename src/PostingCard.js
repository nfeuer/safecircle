import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Done from 'material-ui-icons/Done';
import ThumbDown from 'material-ui-icons/ThumbDown';

const styleSheet = createStyleSheet('PostingCard', theme => ({
  postingCardHeaderRequest: {
    background: '#F44336',
    color: '#fff',
    margin: 0,
    padding: 12
  },
  postingCardHeaderOffer: {
    background: '#4CAF50',
    color: '#fff',
    margin: 0,
    padding: 12
  },
  postingCardContent: {
    padding: 16,
    margin: 0
  },
  done: {
    color: '#4CAF50',
    marginRight: 5
  },
  notHelpful: {
    color: '#F44336',
    marginRight: 5
  }
}));

function PostingCard(props) {
  const classes = props.classes;
  return (
    <div className="posting-card">
      <Card className={classes.card}>
        {
          props.type === 'request' ? (
            <h5 className={classes.postingCardHeaderRequest}>Request</h5>
          ) : (
            <h5 className={classes.postingCardHeaderOffer}>Offer</h5>
          )
        }
        {
          props.type === 'request' ? (
            <h3 className={classes.postingCardContent}>
              <Done className={classes.done} />
              I need to take a shit
            </h3>
          ) : (
            <h3 className={classes.postingCardContent}>
              <ThumbDown className={classes.notHelpful} />
              I have a bathroom
            </h3>
          )
        }
      </Card>
    </div>
  );
};

PostingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PostingCard);