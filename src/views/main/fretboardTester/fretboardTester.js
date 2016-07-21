import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

export class IndexPage extends React.Component {


    handleNoteClick() {
        debugger;
        let state = this.props.store.getState();

        this.props.store.dispatch({ type:"SELECT_NOTE", id:0 });
    }

    render() {

        return (
            <div>
                <h1>Fretboard tester</h1>
                <a onClick={this.handleNoteClick.bind(this)}>click me</a>
            </div>
        )
    }
}

export default IndexPage;
