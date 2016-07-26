import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import Clock from './clock';

import styles from './style.module.css';


export default class FretboardChallenge extends React.Component {


    renderFretboard(){


    }

    componentWillMount(){


    }

    handleNoteClick(note){

        if (this.props.active) {
            this.props.onNoteClick(note);
        } else {
            alert("NO");
        }

    }


    buildString(stringData){

        return (
            <tr className={ (this.props.active) ? styles.activeString : '' }>
                <th>{stringData.get('rootNote')}</th>
                {
                    stringData.get('notes').map((note)=>{
                        return this.buildNote(note);
                    })
                }
            </tr>
        )
    }

    buildNote(note){
        return (
            <td key={note.get('id')}><a onClick={ ()=> this.handleNoteClick(note) }>{ note.get('note') }</a></td>
        )
    }

    render() {

        return this.buildString(this.props.stringData);
    }
}

