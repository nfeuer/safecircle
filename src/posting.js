import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PostingCard from './PostingCard';

const TextFieldStyle = {
    width: "95%"
};

const ButtonStyle = {
    width: "40%",
    marginTop: "10px",
    marginLeft: "5%",
    marginRight: "5%"
};

const styleSheet = createStyleSheet('Posting', theme => ({
    searchTextField: {
        width:"95%"
    },
    requestButton: {
        width: "40%",
        marginTop: "10px",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: '#2196F3',
        hoverColor: "#2196F3",
        color: '#fff'
    },
    offerButton: {
        width: "40%",
        marginTop: "10px",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: '#8BC34A',
        hoverColor: "#8BC34A",
        color: '#fff'
    },
    inactiveButton: {
        width: "40%",
        marginTop: "10px",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: '#d5d5d5',
        hoverColor: "#d5d5d5",
        color: '#fff'
    }
}));


class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestButton: true,
            offerButton: true
        };
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
        let inactiveButton = this.props.classes.inactiveButton;

        let requestButtonClass = this.state.requestButton ? requestButton : inactiveButton;
        let inactiveButtonClass = this.state.offerButton ? offerButton : inactiveButton;

        console.log(requestButtonClass);

        return (
            <div style={{marginTop: "90px", textAlign: "center"}}>
                <TextField
                    label={"Search"}

                    className={this.props.classes.searchTextField}
                />

                <div style={{marginTop: "10px"}}>
                    <Button raised
                            disableFocusRipple={true}
                            disableRipple={true}
                            className={requestButtonClass} 
                            onClick={()=> { this.toggleButton("requestButton"); }}>
                            Request
                    </Button>
                    <Button raised
                            disableFocusRipple={true}
                            disableRipple={true}
                            className={inactiveButtonClass} 
                            onClick={()=> { this.toggleButton("offerButton"); }}>
                            Offer
                    </Button>

                </div>

                <div style={{marginTop: "10px"}}>
                    {this._renderLists()}
                </div>
            </div>
        );
    }

    _renderLists() {
        let list = [];

        for (let i = 0; i < 10; i += 2) {
            if (this.state.requestButton) {
                list.push(<PostingCard type="request" key={i}/>);
            }

            if (this.state.offerButton) {
                list.push(<PostingCard type="offer" key={i + 1}/>);
            }
        }

        return list;
    }

}
export default withStyles(styleSheet)(Posting);
