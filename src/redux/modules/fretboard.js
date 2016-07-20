import { default as Immutable, Map } from 'immutable';

import { default as _ } from 'lodash';

import { default as makeActionCreator } from '../lib/makeActionCreator';

const SELECT_NOTE = 'SELECT_NOTE';


export const buildFretboard = () => {

    const strings = [

        {rootNote: "E", notes: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "E"]},
        {rootNote: "A", notes: ["A", "A#", "B", "C", "C#", "D", "E", "F", "F#", "G", "G#", "A"]},
        {rootNote: "D", notes: ["D", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"]},
        {rootNote: "G", notes: ["G", "G#", "A", "A#", "B", "C", "C#", "D", "E", "F", "F#", "G"]},
        {rootNote: "B", notes: ["B", "C", "C#", "D", "E", "F", "F#", "G", "G#", "A", "A#", "B"]},
        {rootNote: "E", notes: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "E"]}

    ];

    let noteId = 0;
    strings.forEach((str, i) => { str.notes.forEach((note, i) => {
        str.notes[i] = { note:note, id:noteId };
        noteId++;
    })
    });

    return Immutable.fromJS(strings);

};

export const buildChallenge = (strings, note) => {
    const noteSet = strings.reduce((memo, str) => {
        let newNotes = str.get("notes").filter((noteObj) => {
             return noteObj.get("note") === note;
        });
        memo.push(...newNotes);
        return memo;
    },new Array());
    return Immutable.fromJS({ note:note, notes:noteSet  });
};

const initialState = Immutable.fromJS({ strings: buildFretboard(), currentChallenge:null });


const actionTypes = {
    SELECT_NOTE: 'SELECT_NOTE',
    NEW_CHALLENGE: 'NEW_CHALLENGE'
};

export default {

    reducer: (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.SELECT_NOTE:
                state = state.set('b', action.id);
                return state;
            case actionTypes.NEW_CHALLENGE:
                //return state;
                state = state.set("currentChallenge",buildChallenge(state.get("strings"),action.note));
                return state;
            default:
                return state;
        }
    },

    actions: {
        selectNote: makeActionCreator(actionTypes.SELECT_NOTE, 'id'),
        newChallenge: makeActionCreator(actionTypes.NEW_CHALLENGE, 'note')
    }

}




