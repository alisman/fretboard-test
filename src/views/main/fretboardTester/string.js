import React from 'react';

export default class FretboardChallenge extends React.Component {


    renderFretboard(){


    }

    componentWillMount(){

        console.log('hello');

    }

    handleNoteClick(note){

        if (this.props.active) {
            this.props.onNoteClick(note);
        } else {
            // record error
        }

    }


    buildString(stringData){

        return (
            <tr className={ (this.props.active) ? 'active-string' : '' }>
                {
                    stringData.get('notes').map((note)=>{
                        return this.buildNote(note);
                    })
                }
            </tr>
        );
    }


    buildNote(note){
        return (
            <td key={note.get('id')}><div className='note' onClick={ ()=> this.handleNoteClick(note) }>
                <i className="fa fa-circle note-hit" aria-hidden="true"></i>{ (this.props.show-note) ? note.get('note') : null }
            </div></td>
        );
    }

    render() {

        return this.buildString(this.props.stringData);
    }
}

