import { default as Immutable, Map } from 'immutable';
import { default as _ } from 'lodash';
import { default as makeActionCreator } from '../lib/makeActionCreator';
import { default as buildChallenge } from '../lib/buildChallenge';
import { default as buildFretboard } from '../lib/buildFretboard';
import { default as selectNote } from '../lib/selectNote';

const SELECT_NOTE = 'SELECT_NOTE';

const initialState = Immutable.fromJS({strings: buildFretboard(), currentChallenge: null, errorLog:[] });

const actionTypes = {
    SELECT_NOTE: 'SELECT_NOTE',
    NEW_CHALLENGE: 'NEW_CHALLENGE'
};

export default {

    reducer: (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.SELECT_NOTE:
                return selectNote(state, action.id)

            case actionTypes.NEW_CHALLENGE:
                //return state;
                state = state.set("currentChallenge", buildChallenge(state.get("strings"), action.note));
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




