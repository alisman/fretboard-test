import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import Clock from './clock';
import String from './string'
import { actionCreators } from 'reducers/fretboard';

export default class FretboardChallenge extends React.Component {

    componentDidMount(){


    }

    handleTestComplete(){
         this.context.store.dispatch(actionCreators.testComplete());
    }

    buildNextTestButton(){
        return <a onClick={ ()=> this.startNewTest() }>next test</a>;
    }

    startNewTest() {
        this.context.store.dispatch(actionCreators.newTest());
    }


    buildFretboard(strings){
        return strings.map((str,i)=>{ return (<String key={i} active={ (i === this.props.activeStringIndex) } onNoteClick={this.props.onNoteClick} stringData={str} />) });
    }

    render() {

        const store = this.context.store.getState();

        const currentNote = store.getIn(['noteSelection','currentChallenge','currentNote']);

        const nextTestButton = (store.getIn(['noteSelection','currentChallenge','complete']) === false) ? null :
                this.buildNextTestButton();

        return (
            <div>
                <h1>Fretboard Challenge</h1>
                <p>Correct: <strong>{ store.getIn(['noteSelection','currentChallenge','correct']).size }</strong></p>
                <p>Errors: <strong>{ store.getIn(['noteSelection','currentChallenge','error']).size }</strong></p>
                <p>Current Note: <strong>{ currentNote }</strong></p>
                <div><Clock duration="60" onComplete={ this.handleTestComplete.bind(this) } /></div>
                { nextTestButton }
                <table className="fretboard">
                    <tbody>
                        {
                            this.buildFretboard(this.props.fretboardData, currentNote)
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

