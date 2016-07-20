import { default as buildChallenge } from './buildChallenge'
import buildFretboard from './buildFretboard'
import { assert } from 'chai'

describe('buildChallenge', () => {

    let fretboard;

    beforeEach(() => {
       fretboard = buildFretboard();
    });

    it('Finds 8 notes for E', () => {

        let newChallenge = buildChallenge(fretboard,"E");
        assert.equal( newChallenge.get("notes").size, 8);


    });

    it('Finds 7 notes for A', () => {

        let newChallenge = buildChallenge(fretboard,"E");
        assert.equal( newChallenge.get("notes").size, 8);

    });

    it('Finds 6 notes for C', () => {

        let newChallenge = buildChallenge(fretboard,"E");
        assert.equal( newChallenge.get("notes").size, 8);

    });

});
