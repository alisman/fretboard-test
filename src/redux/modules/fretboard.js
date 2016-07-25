import { default as Immutable, Map } from 'immutable';
import { default as _ } from 'lodash';
import { default as makeActionCreator } from '../lib/makeActionCreator';
import { default as buildChallenge } from '../lib/buildChallenge';
import { default as buildFretboard } from '../lib/buildFretboard';
import { default as selectNote } from '../lib/selectNote';
import { default as handleSelection } from '../lib/handleSelection';

const SELECT_NOTE = 'SELECT_NOTE';

const initialState = Immutable.fromJS({strings: buildFretboard(), currentChallenge: null, errorLog:[] });

const actionTypes = {
    SELECT_NOTE: 'SELECT_NOTE',
    NEW_CHALLENGE: 'NEW_CHALLENGE',
    SELECTION_ATTEMPT: 'SELECTION_ATTEMPT'
};

export const actionCreators = {
    selectNote: makeActionCreator(actionTypes.SELECT_NOTE, 'id'),
    newChallenge: makeActionCreator(actionTypes.NEW_CHALLENGE, 'note'),
    selectionAttempt:makeActionCreator(actionTypes.SELECTION_ATTEMPT,'noteObj')
}

export default {

    reducer: (state = initialState, action) => {

        console.log(action);

        switch (action.type) {

            case actionTypes.NEW_CHALLENGE:
                //return state;
                state = state.set("currentChallenge", buildChallenge() );
                state = state.setIn(['currentChallenge','currentNote'],'E');
                return state;

            case actionTypes.SELECTION_ATTEMPT:

                state = handleSelection(state,action.noteObj);
                //return handleSelection(state,action.noteObj);
                return state;
            default:
                return state;
        }
    },

    actions: actionCreators

}




