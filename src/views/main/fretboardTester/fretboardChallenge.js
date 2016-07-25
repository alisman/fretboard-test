import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import Clock from './clock';
import String from './string'

export default class FretboardChallenge extends React.Component {


    buildFretboard(strings){
        return strings.map((str,i)=>{ return (<String key={i} active={ (i === this.props.activeStringIndex) } onNoteClick={this.props.onNoteClick} stringData={str} />) });
    }

    render() {

        var store = this.context.store.getState();

        return (
            <div>
                <h1>Fretboard Challenge</h1>
                <p>Correct: <strong>{ store.getIn(['noteSelection','currentChallenge','correct']).size }</strong></p>
                <table>
                    <tbody>
                        {
                            this.buildFretboard(this.props.fretboardData)
                        }
                    </tbody>
                </table>
                <Clock duration="5" onComplete={()=>{console.log('done')}} />
            </div>
        )
    }
}

// grant access to the store via context
FretboardChallenge.contextTypes = {
    store: React.PropTypes.object.isRequired
};

