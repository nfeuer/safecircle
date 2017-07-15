import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PostingCard from './PostingCard';

let postings = require('./postings.json');

const styleSheet = createStyleSheet('Posting', theme => ({
    searchTextField: {
        width:"95%"
    },
    button: {
        width: "40%",
        marginTop: "10px",
        marginLeft: "5%",
        marginRight: "5%"
    }
}));

class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestButton: true,
            offerButton: true
        };
        this.postings = postings;
    }

    toggleButton = (buttonType) => {
        if (buttonType === "requestButton") {
            this.setState({
                requestButton: !this.state.requestButton
            });
        }
        if (buttonType === "offerButton") {
            this.setState({
                offerButton: !this.state.offerButton
            });
        }
    };

    render() {
        let requestButton = this.props.classes.requestButton;
        let offerButton  = this.props.classes.offerButton;
        return (
            <div style={{marginTop: "90px", textAlign: "center"}}>
                <TextField
                    label={"Search"}
                    className={this.props.classes.searchTextField}
                />

                <div style={{marginTop: "10px"}}>
                    <Button raised
                            className={this.props.classes.button}
                            color={ this.state.requestButton ?
                                "accent": "contrast"}
                            onClick={()=> { this.toggleButton("requestButton"); }}>
                            Request
                    </Button>
                    <Button raised
                            className={this.props.classes.button}
                            color={ this.state.offerButton ?
                                "primary": "contrast"}
                            onClick={()=> { this.toggleButton("offerButton"); }}>
                            Offer
                    </Button>

                </div>

                <div style={{marginTop: "10px"}}>
                    {this._generateList(this.postings)}
                </div>
            </div>
        );
    }

    _generateList(list) {
        return list.map((item, idx) => {
            if (!item.isDelete && ((item.type === 'request' && this.state.requestButton) ||
                (item.type === 'offer' && this.state.offerButton))) {
                return (
                    <PostingCard 
                        type={item.type} 
                        key={idx} 
                        title={item.title}
                        content={item.content}
                        onDelete={()=>{
                            this.postings[idx].isDelete = true;
                        }}
                    />
                );
            }
        });
    }

}
export default withStyles(styleSheet)(Posting);
