import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import * as Immutable from 'immutable'
import { default as fretboardReducer, buildFretboard } from './fretboard.js'

describe('<App />', () => {

    beforeEach(() => {

    });

    it("#buildFretboard builds fretboard and indexes notes",() => {
        const fretboard = buildFretboard();
        assert.equal(fretboard.get(0).get("notes").get(0).get("id"), 0);
        //assert.equal(fretboard[1].notes[0].id, 12);
    });

    it("a dummy action without state appropriate initial state", () => {
        let state = fretboardReducer.reducer(undefined, { type: "FOO"});
        assert.equal(state.get("strings").get(0).get("notes").get(0).get("id"), 0);
        assert.equal(state.get("strings").get(1).get("notes").get(0).get("id"), 12);
    });

    it("NEW_CHALLENGE sets currentChallenge to appropriate note set", () => {
        let state = fretboardReducer.reducer(undefined,fretboardReducer.actions.newChallenge("E"));
        assert.equal(state.get("currentChallenge").get("notes").size, 8);
        assert.equal(state.get("currentChallenge").get("notes").get(0).get('id'), 0);
        assert.equal(state.get("currentChallenge").get("notes").get(2).get('id'), 18);

        state = fretboardReducer.reducer(state,fretboardReducer.actions.newChallenge("A"));
        assert.equal(state.get("currentChallenge").get("notes").size, 7);
        assert.equal(state.get("currentChallenge").get("notes").get(0).get('id'), 5);
        assert.equal(state.get("currentChallenge").get("notes").get(1).get('id'), 12);
    });


});
