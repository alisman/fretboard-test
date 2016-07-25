import { List, Map } from 'immutable'

export default (state, noteObj) => {

    let newState;

    if (state.getIn(['currentChallenge','currentNote']) === noteObj.get('note')) {
        newState = state.updateIn(['currentChallenge','correct'],
                list => list.push(noteObj)
        );
    } else {
        newState = state.updateIn(['currentChallenge','error'],
                list => list.push(noteObj)
        );
    }

    return newState;

}