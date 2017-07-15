import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PostingCard from './PostingCard';

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
            offerButton: true,
            list: []
        };
        for (let i = 0; i < 10; i += 2) {
            if (this.state.requestButton) {
                this.state.list.push(<PostingCard type="request" key={i} deleteCard={()=> {
                    this.state.list = this.state.list.filter(l => l.key !== `${i}`);
                    this.setState(this.state);
                }}/>);
            }

            if (this.state.offerButton) {
                this.state.list.push(<PostingCard type="offer" key={i + 1} deleteCard={()=> {
                    this.state.list = this.state.list.filter(l => l.key !== `${i + 1}`);
                    this.setState(this.state);
                }}/>);
            }
        }
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
                    {this.state.list}
                </div>
            </div>
        );
    }

}
export default withStyles(styleSheet)(Posting);
