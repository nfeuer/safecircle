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
    fontSize: "30px"
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
      color: "#F44336",
      fontSize: "30px"
  }
}));

class PostingCard extends Component {
  constructor(props) {
      super(props);
      this.isLeave = false;
  }

  render() {
      let classes = this.props.classes;
      return (
          <Animation isLeave={this.isLeave}>
              <div className="posting-card">
                  <Card className={classes.card}>
                      {
                          this.props.type === 'request' ? (
                              <h5 className={classes.postingCardHeaderRequest}>Request</h5>
                          ) : (
                              <h5 className={classes.postingCardHeaderOffer}>Offer</h5>
                          )
                      }
                      <h3 className={classes.postingCardContent}>
                          {
                            this.props.type === 'request' ? (
                              <QuestionAnswer className={classes.questionAnswer}/>
                            ) : (
                              <Mail className={classes.mail} />
                            )
                          }
                          {this.props.title}
                      </h3>
                      <div>
                          <p className={classes.content}>
                              {this.props.content}
                          </p>
                          {
                            this.props.type === 'request' ? (
                                <div className={classes.operations}>
                                    <IconButton className={classes.done} onClick={()=> {
                                          this.isLeave = true;
                                          this.props.onDelete();
                                          this.forceUpdate();
                                      }}>
                                        <Done/>
                                    </IconButton>
                                    <IconButton className={classes.deleteIcon} onClick={()=> {
                                          this.isLeave = true;
                                          this.props.onDelete();
                                        this.forceUpdate();
                                      }}>
                                        <Delete/>
                                    </IconButton>
                                </div>
                            ) : (
                                <div className={classes.operations}>
                                    <IconButton onClick={()=> {
                                          this.isLeave = true;
                                          this.props.onDelete();
                                          this.forceUpdate();
                                      }}>
                                        <ThumbUp />
                                    </IconButton>
                                    <IconButton onClick={()=> {
                                          this.isLeave = true;
                                          this.props.onDelete();
                                          this.forceUpdate();
                                      }}>
                                        <ThumbDown />
                                    </IconButton>
                                </div>
                            )
                          }
                      </div>
                  </Card>
              </div>
          </Animation>
      );
  }

};

PostingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
};

export default withStyles(styleSheet)(PostingCard);