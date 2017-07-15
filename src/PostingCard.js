import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import QuestionAnswer from 'material-ui-icons/QuestionAnswer';
import Done from 'material-ui-icons/Done';
import Delete from 'material-ui-icons/Delete';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Mail from 'material-ui-icons/Mail';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Animation from './Animation';
const styleSheet = createStyleSheet('PostingCard', theme => ({
  postingCardHeaderRequest: {
    background: '#f50057',
    color: '#fff',
    margin: 0,
    padding: 12
  },
  postingCardHeaderOffer: {
    background: '#3f51b5',
    color: '#fff',
    margin: 0,
    padding: 12
  },
  postingCardContent: {
    padding: 16,
    margin: 0,
    textAlign: 'left'
  },
  questionAnswer: {
    position: "relative",
    top: "5px",
    color: "#9E9E9E",
    marginRight: 5
  },
  done: {
    color: '#4CAF50',
    marginRight: 5
  },
  mail: {
      position: "relative",
      top: "5px",
      color: "#9E9E9E",
      marginRight: 5
  },
  content: {
    margin: 0,
    padding: 16,
    textAlign: 'left'
  },
  operations: {
    margin: [-16, 0, 0, 0],
    padding: 16,
    textAlign: 'right',
    fontSize: 12,
    color: '#aaa'
  },
  deleteIcon: {
      color: "#F44336"
  }
}));

class PostingCard extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      let classes = this.props.classes;
      return (
          <Animation>
              <div className="posting-card">
                  <Card className={classes.card}>
                      {
                          this.props.type === 'request' ? (
                              <h5 className={classes.postingCardHeaderRequest}>Request</h5>
                          ) : (
                              <h5 className={classes.postingCardHeaderOffer}>Offer</h5>
                          )
                      }
                      {
                          this.props.type === 'request' ? (
                              <h3 className={classes.postingCardContent}>
                                  <QuestionAnswer className={classes.questionAnswer}/>
                                  Where can I find a lawyer?
                              </h3>
                          ) : (
                              <h3 className={classes.postingCardContent}>
                                  <Mail className={classes.mail} />
                                  I am renting my extra bedroom.
                              </h3>
                          )
                      }
                      {
                          this.props.type === 'request' ? (
                              <div>
                                  <p className={classes.content}>
                                      I hit someone's car.
                                  </p>
                                  <div className={classes.operations}>
                                      <IconButton className={classes.done} onClick={this.props.deleteCard}>
                                          <Done/>
                                      </IconButton>
                                      <IconButton className={classes.deleteIcon} onClick={this.props.deleteCard}>
                                          <Delete/>
                                      </IconButton>
                                  </div>
                              </div>
                          ) : (
                              <div>
                                  <p className={classes.content}>
                                      I have an extra bedroom in my house, feel free to come by and check it out.
                                  </p>
                                  <div className={classes.operations}>
                                      <IconButton onClick={this.props.deleteCard}>
                                          <ThumbUp />
                                      </IconButton>
                                      <IconButton onClick={this.props.deleteCard}>
                                          <ThumbDown />
                                      </IconButton>
                                  </div>
                              </div>
                          )
                      }
                  </Card>
              </div>
          </Animation>
      );
  }

};

PostingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(PostingCard);