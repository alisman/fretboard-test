import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import FretboardChallenge from './fretboardChallenge';
import { actionCreators } from 'reducers/fretboard';

export class IndexPage extends React.Component {

    componentWillMount(){

        this.props.store.dispatch({ type:"NEW_CHALLENGE" });

        this.storeState = this.props.store.getState();

    }

    handleNoteClick(noteObj) {

        this.props.store.dispatch(actionCreators.selectionAttempt(noteObj));

    }

    render() {

        let challenge;

        if (this.storeState.get('noteSelection').get('currentChallenge') !== null) {
            challenge = <FretboardChallenge activeStringIndex={ this.storeState.get('noteSelection').get('currentChallenge').get('activeStringIndex') }
                                            onNoteClick={(note) => this.handleNoteClick(note) }
                                            fretboardData={ this.storeState.get("noteSelection").get('strings') }
                                            challenge={ this.storeState.get('noteSelection').get('currentChallenge') }
                />
        } else {
            challenge = "<h2>nope</h2>";
        }

        return (
            <div>
                <h1>Fretboard tester</h1>
                { challenge }
                 </div>
        )
    }
}

export default IndexPage;
