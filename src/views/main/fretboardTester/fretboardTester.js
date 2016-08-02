import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import FretboardChallenge from './fretboardChallenge';
import { actionCreators } from 'reducers/fretboard';
import HistoryChart from './charts/history';
import ErrorChart from './charts/errors';
import RestartModal from './modals/restartModal';
import TestDuration from './forms/testDuration';

export class IndexPage extends React.Component {

    componentWillMount(){
        this.state = { showModal:false };
    }

    componentDidMount(){

    }

    handleChangeDuration(){

        this.props.store.dispatch(actionCreators.changeTestDuration(15,false));

    }

    handleNoteClick(noteObj) {

        this.props.store.dispatch(actionCreators.selectionAttempt(noteObj));

    }

    showModal(storeState){

        switch(storeState.get('noteSelection').get('currentModal')) {
            case "CHANGE_DURATION_CONFIRMATION":
                return <RestartModal show={false} />;
        }

    }

    getStoreState(){

        return this.props.store.getState();

    }

    render() {

        let challenge;

        let storeState = this.getStoreState();

        if (storeState.get('noteSelection').get('currentChallenge') !== null) {

            challenge = <FretboardChallenge key={storeState.get('noteSelection').get('currentChallenge').get('id')}
                                            onNoteClick={(note) => this.handleNoteClick(note) }
                                            fretboardData={ storeState.get("noteSelection").get('strings') }
                                            challenge={ storeState.get('noteSelection').get('currentChallenge') }
                />;

        } else {

            challenge = "<h2>Error: There is no challenge</h2>";

        }

        return (
            <div>
                <div className="section" id="challenge-area">
                    { challenge }
                </div>
                <div className="section" id="stats-area">


                        <div><HistoryChart data={storeState.getIn(['noteSelection','testHistory'])}  /></div>
                        <div><ErrorChart data={storeState.getIn(['noteSelection','testHistory'])} />

                    </div>

                </div>

                <a onClick={ ()=>this.handleChangeDuration() }>Change test duration</a>

                { this.showModal(storeState) }

            </div>
        );
    }
}

export default IndexPage;
