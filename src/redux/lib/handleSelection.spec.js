import Immutable from 'immutable';
import handleSelection from './handleSelection';
import { default as buildFretboard } from '../lib/buildFretboard'
import { default as buildChallenge } from '../lib/buildChallenge'
import { assert } from 'chai'


describe('selectNote', () => {

    let fretboard, currentChallenge, state;


    beforeEach(() => {

        fretboard = buildFretboard();
        currentChallenge = buildChallenge(fretboard);
        state = Immutable.fromJS({
            currentChallenge,
            errorLog:[]
        });

    });

    it('adds note to correct selection list if note is correct', ()=>{

        state = state.setIn(['currentChallenge','currentNote'],'E');

        let newState = handleSelection(state, Immutable.Map({ note:"E" }));

        assert.equal(newState.getIn(['currentChallenge','correct']).size, 1);
        assert.equal(newState.getIn(['currentChallenge','correct',0]).get('note'),'E');

        newState = handleSelection(newState, Immutable.Map({ note:"E" }));

        assert.equal(newState.getIn(['currentChallenge','correct']).size, 2);

    });

    it('adds note to error list if note is incorrect', ()=>{

        state.setIn(['currentChallenge','currentNote'],'E');

        let newState = handleSelection(state, Immutable.Map({ note:"F" }));

        assert.equal(newState.getIn(['currentChallenge','correct']).size, 0);


    });




});