import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import Clock from './clock';
import String from './string'
import { actionCreators } from 'reducers/fretboard';

export default class FretboardChallenge extends React.Component {

    componentDidMount() {


    }

    handleTestComplete() {

        if (window.localStorage) {
            //let history = window.localStorage.getItem("fretboardTestHistory");
            //
            //if (history) {
            //    history.test.push()
            //}
        }

        this.context.store.dispatch(actionCreators.testComplete());
    }

    buildNextTestButton() {
        return <div className="report-badge play-button" onClick={ ()=> this.startNewTest() }><i className="fa fa-play"></i></div>;
    }

    buildClock(storeState) {
        return <div className="report-badge"><i className="fa fa-clock-o"></i><br />
            <Clock duration={ storeState.getIn(['noteSelection','testDuration']) } onComplete={ this.handleTestComplete.bind(this) }/>
        </div>
    }

    startNewTest() {
        this.context.store.dispatch(actionCreators.newTest(true));
    }


    buildFretboard(storeState) {
        return storeState.getIn(['noteSelection','strings']).reverse().map((str, i)=> {
            return (<String key={i} active={ (this.isTestActive(storeState) && i === storeState.get('noteSelection').get('currentChallenge').get('activeStringIndex')) }
                            onNoteClick={this.props.onNoteClick}
                            stringData={str}/>);
        });
    }

    getStoreState() {

        return this.context.store.getState();

    }

    isTestActive(storeState) {

        return (storeState.getIn(['noteSelection', 'currentChallenge', 'complete']) === false &&
                storeState.getIn(['noteSelection', 'currentChallenge', 'started']) === true);

    }


    render() {

        const storeState = this.getStoreState();

        const currentNote = storeState.getIn(['noteSelection', 'currentChallenge', 'currentNote']);

        const clockOrStartButton = (this.isTestActive(storeState)) ? this.buildClock(storeState) :  this.buildNextTestButton();

        const instruction = (this.isTestActive(storeState)) ? <p>Please find { currentNote }</p> : <p>&nbsp;</p>

        return (
            <div className="fretboard-test">

                <div className="reports">

                    <div className="report-badge"><i className="fa fa-thumbs-down"></i><br />
                        { storeState.getIn(['noteSelection', 'currentChallenge', 'error']).size }
                    </div>

                    <div className="report-badge"><i className="fa fa-thumbs-up"></i><br />
                        { storeState.getIn(['noteSelection', 'currentChallenge', 'correct']).size }
                    </div>

                    { clockOrStartButton }

                </div>


                { instruction }

                <table className="fretboard">
                    <tbody>
                    {
                        this.buildFretboard(storeState, currentNote)
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}

// grant access to the store via context
FretboardChallenge.contextTypes = {
    store: React.PropTypes.object.isRequired
};

