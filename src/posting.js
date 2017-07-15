import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';

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
        hoverColor: "#2196F3"
    },
    offerButton: {
        width: "40%",
        marginTop: "10px",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: '#8BC34A',
        hoverColor: "#8BC34A"
    },
    inactiveButton: {
        width: "40%",
        marginTop: "10px",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: '#d5d5d5',
        hoverColor: "#d5d5d5"
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
        console.log(buttonType);
        if (buttonType === "requestButton") {
            this.setState(previousState => {
                previousState.requestButton = !previousState.requestButton;
                return previousState;
            });
        }
        if (buttonType === "offerButton") {
            this.setState(previousState => {
                previousState.offerButton = !previousState.offerButton;
                return previousState;
            });
        }
    };

    render() {
        let requestButton = this.props.classes.requestButton;
        let offerButton  = this.props.classes.offerButton;
        let inactiveButton = this.props.classes.inactiveButton;
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
                            className={this.state.requestButton ?
                                requestButton : inactiveButton} onClick={()=> { this.toggleButton("requestButton"); }}>
                        Request
                    </Button>
                    <Button raised
                            disableFocusRipple={true}
                            disableRipple={true}
                            className={this.state.offerButton ?
                                offerButton : inactiveButton} onClick={()=> { this.toggleButton("offerButton"); }}>
                        Offer
                    </Button>

                </div>

                <div style={{marginTop: "10px"}}>

                </div>
            </div>
        );
    }

}
export default withStyles(styleSheet)(Posting);
