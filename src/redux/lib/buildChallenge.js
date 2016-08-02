import { default as Immutable } from 'immutable';

export default () => {

    let challenge = {
        id: Date.now(),
        currentNote: null,
        complete: false,
        started:false,
        activeStringIndex: null,
        correct: [],
        error: [],
        incorrectNoteSelected: false
    };

    return Immutable.fromJS(challenge);
};