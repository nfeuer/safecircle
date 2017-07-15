import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Done from 'material-ui-icons/Done';
import Delete from 'material-ui-icons/Delete';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';

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
  },
  content: {
    margin: 0,
    padding: 16
  },
  operations: {
    margin: [-16, 0, 0, 0],
    padding: 16,
    textAlign: 'right',
    fontSize: 12,
    color: '#aaa'
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
              Where can I find a lawyer?
            </h3>
          ) : (
            <h3 className={classes.postingCardContent}>
              <ThumbDown className={classes.notHelpful} />
              I am renting my extra bedroom.
            </h3>
          )
        }
        {
          props.type === 'request' ? (
            <div>
              <p className={classes.content}>
                I hit someone's car.
              </p>
              <div className={classes.operations}>
                <Done />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Delete />
              </div>
            </div>
          ) : (
            <div>
              <p className={classes.content}>
                I have an extra bedroom in my house, feel free to come by and check it out.
              </p>
              <div className={classes.operations}>
                <ThumbUp />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ThumbDown />
              </div>
            </div>
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