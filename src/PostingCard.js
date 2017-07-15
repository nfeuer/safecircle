import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import QuestionAnswer from 'material-ui-icons/QuestionAnswer';
import Done from 'material-ui-icons/Done';
import Delete from 'material-ui-icons/Delete';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Mail from 'material-ui-icons/Mail';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Animation from './Animation';
import classnames from 'classnames';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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

let comments = [{
  user: 'Juan',
  content: 'Sounds good!'
}, {
  user: 'Jacob',
  content: 'Very helpful!'
}];
  
class PostingCard extends Component {
  constructor(props) {
      super(props);

      this.state = {
        expanded: false,
        comments: comments
      };
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
                                    <IconButton className={classes.done} onClick={this.props.deleteCard}>
                                        <Done/>
                                    </IconButton>
                                    <IconButton className={classes.deleteIcon} onClick={this.props.deleteCard}>
                                        <Delete/>
                                    </IconButton>
                                </div>
                            ) : (
                                <div className={classes.operations}>
                                    <IconButton onClick={this.props.deleteCard}>
                                        <ThumbUp />
                                    </IconButton>
                                    <IconButton onClick={this.props.deleteCard}>
                                        <ThumbDown />
                                    </IconButton>
                                </div>
                            )
                          }
                      </div>
                      <div>
                        <IconButton
                          onClick={this._handleExpand.bind(this)}
                          aria-expanded={this.state.expanded}
                          aria-label="Show more"
                          className="show-comment">
                          <ExpandMoreIcon />
                        </IconButton>
                      </div>
                      <Collapse 
                        in={this.state.expanded} 
                        transitionDuration="auto" 
                        unmountOnExit
                        className="comment-list">
                        <p className="comment-input">
                          <TextField
                            ref="comment"
                            id="comment"
                            label="Write Your Comment"
                            className="comment-field"
                            marginForm/>
                          <Button onClick={this._handleSubmit.bind(this)}>SUBMIT</Button>
                        </p>
                        <h6>Comments</h6>
                        {
                          this.state.comments.map((item, idx) => {
                            return (
                              <p key={idx}>{item.user}: {item.content}</p>
                            )
                          })
                        }
                      </Collapse>
                  </Card>
              </div>
          </Animation>
      );
  }

  _handleExpand(e) {
    e.preventDefault();

    this.setState({ 
      expanded: !this.state.expanded 
    });
  }

  _handleSubmit(e) {
    e.preventDefault();

    let comments = this.state.comments;
    comments.unshift({
      user: 'David',
      content: document.getElementById('comment').value
    });

    this.setState({
      comments: comments
    });
  }

};

PostingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
};

export default withStyles(styleSheet)(PostingCard);