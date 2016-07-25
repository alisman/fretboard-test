import Immutable from 'immutable';
import selectNote from './selectNote';
import { default as buildFretboard } from '../lib/buildFretboard'
import { default as buildChallenge } from '../lib/buildChallenge'
import { assert } from 'chai'


describe('selectNote', () => {

    let fretboard, currentChallenge, state;


    //beforeEach(() => {
    //
    //    fretboard = buildFretboard();
    //    currentChallenge = buildChallenge(fretboard, 'E');
    //    state = Immutable.fromJS({
    //       currentChallenge,
    //        errorLog:[]
    //    });
    //
    //});
    //
    //it('marks a note as selected', () => {
    //
    //    state = selectNote(state,0);
    //    assert.equal(state.get('currentChallenge').get('notes').get(0).get('selected'), true);
    //});
    //
    //it('sets error property if note does not exist in challenge, increments error count and adds to error log', () => {
    //
    //    state = selectNote(state,1000);
    //    assert.equal(state.get('currentChallenge').get('incorrectNoteSelected'), true);
    //
    //    assert.equal(state.get('errorLog').size,1);
    //
    //    assert.equal(state.get('errorLog').get(0).get('errorNoteId'),1000);
    //
    //    state = selectNote(state,1001);
    //
    //    assert.equal(state.get('errorLog').size,2);
    //
    //    assert.equal(state.get('errorLog').get(1).get('errorNoteId'),1001);
    //
    //});
    //
    //it('correct selection sets incorrectNoteSelected flag back to false', () => {
    //
    //    state = selectNote(state,1000);
    //    assert.equal(state.get('currentChallenge').get('incorrectNoteSelected'), true);
    //
    //    state = selectNote(state,0);
    //
    //    assert.equal(state.get('currentChallenge').get('incorrectNoteSelected'), false);
    //
    //});


});

