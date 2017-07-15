import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        this.setState(state => {
            return {isLoading: false};
        });
    }

    render() {
        return (
            <CSSTransitionGroup
            transitionName="animation"
            transitionEnterTimeout={500}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionLeave={true}
            >
                {!this.state.isLoading && !this.props.isLeave && this.props.children}
            </CSSTransitionGroup>
        );
    }
}