import React, { PropTypes as T } from 'react';

export default class IndexPage extends React.Component {

    constructor() {

        super();
        this.state = {
            timeLeft:100
        };
    }

    componentWillUnmount() {

        clearTimeout(this.timerInterval);

    }

    componentDidMount() {

        this.setState({
           timeLeft:this.props.duration
        });

        this.timerInterval = setInterval(() => {
            this.setState({ timeLeft:this.state.timeLeft - 1  });
            if (this.state.timeLeft < 1) {
                clearTimeout(this.timerInterval);
                if (typeof this.props.onComplete === "function") {
                    this.props.onComplete();
                }
            }
        },1000);
    }

    render() {

        return (
            <div className='clock'>
                { this.state.timeLeft }
            </div>
        )
    }


}

