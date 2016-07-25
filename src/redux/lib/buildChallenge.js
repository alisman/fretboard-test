import { default as Immutable } from 'immutable'

export default () => {
    return Immutable.fromJS({ currentNote:null, activeStringIndex:0, correct:[], error:[], incorrectNoteSelected:false  });
};