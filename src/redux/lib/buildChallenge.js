import { default as Immutable } from 'immutable'

export default () => {
    return Immutable.fromJS({ id:Date.now() , currentNote:null, complete:false, activeStringIndex:0, correct:[], error:[], incorrectNoteSelected:false  });
};