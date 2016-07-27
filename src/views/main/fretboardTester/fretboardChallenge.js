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
        return strings.reverse().map((str,i)=>{ return (<String show-note='true' key={i} active={ (i === this.props.activeStringIndex) } onNoteClick={this.props.onNoteClick} stringData={str} />) });
    }

    render() {

        const store = this.context.store.getState();

        const currentNote = store.getIn(['noteSelection','currentChallenge','currentNote']);

        const nextTestButton = (store.getIn(['noteSelection','currentChallenge','complete']) === false) ? null :
                this.buildNextTestButton();

        return (
            <div className="fretboard-test">

                <div className="reports">
                <div className="report-badge"><i className="fa fa-thumbs-down"></i><br />
                    { store.getIn(['noteSelection','currentChallenge','error']).size }
                </div>

                <div className="report-badge"><i className="fa fa-thumbs-up"></i><br />
                    { store.getIn(['noteSelection','currentChallenge','correct']).size }
                                </div>

                    <div className="report-badge"><i className="fa fa-clock-o"></i><br />
                        <Clock duration="60" onComplete={ this.handleTestComplete.bind(this) } />
                    </div>

                </div>


                <p>Please find { currentNote }</p>


                <table className="fretboard">
                    <tbody>
                        {
                            this.buildFretboard(this.props.fretboardData, currentNote)
                        }
                    </tbody>
                </table>

                <p>  { nextTestButton } </p>

            </div>
        )
    }
}

// grant access to the store via context
FretboardChallenge.contextTypes = {
    store: React.PropTypes.object.isRequired
};

