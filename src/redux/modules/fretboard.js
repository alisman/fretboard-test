import { default as Immutable, Map } from 'immutable';
import { default as _ } from 'lodash';
import { default as makeActionCreator } from '../lib/makeActionCreator';
import { default as buildChallenge } from '../lib/buildChallenge';
import { default as buildFretboard } from '../lib/buildFretboard';
import { default as handleSelection } from '../lib/handleSelection';
import getRandomNote from '../lib/getRandomNote';
import getRandomString from '../lib/getRandomString';
import completeTest from '../lib/completeTest';

const SELECT_NOTE = 'SELECT_NOTE';

const initialState = Immutable.fromJS({strings: buildFretboard(), currentChallenge: null, errorLog:[] });

const actionTypes = {
    SELECT_NOTE: 'SELECT_NOTE',
    NEW_CHALLENGE: 'NEW_CHALLENGE',
    SELECTION_ATTEMPT: 'SELECTION_ATTEMPT',
    TEST_COMPLETE: 'TEST_COMPLETE',
    NEW_TEST: 'NEW_TEST'
};

export const actionCreators = {
    selectNote: makeActionCreator(actionTypes.SELECT_NOTE, 'id'),
    newChallenge: makeActionCreator(actionTypes.NEW_CHALLENGE, 'note'),
    selectionAttempt:makeActionCreator(actionTypes.SELECTION_ATTEMPT,'noteObj'),
    testComplete:makeActionCreator(actionTypes.TEST_COMPLETE),
    newTest:makeActionCreator(actionTypes.NEW_TEST)
}

export default {

    reducer: (state = initialState, action) => {

        switch (action.type) {

            case actionTypes.SELECTION_ATTEMPT:

                state = handleSelection(state,action.noteObj);
                //return handleSelection(state,action.noteObj);
                return state;

            case actionTypes.TEST_COMPLETE:

                return completeTest(state);

            case actionTypes.NEW_TEST:


                const newChallenge = buildChallenge().merge({
                    currentNote:getRandomNote(),
                    activeStringIndex:getRandomString()
                });

                console.log(newChallenge.toJS());


                state = state.set("currentChallenge", newChallenge );


                //state = state.setIn(['currentChallenge','currentNote'])

                return state;
            default:
                return state;
        }
    },

    actions: actionCreators

}

// dummy comment


