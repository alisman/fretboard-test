import { List, Map } from 'immutable'
import getRandomNote from './getRandomNote'
import getRandomString from './getRandomString'

export default (state, noteObj) => {

    let newState;

    if (state.getIn(['currentChallenge','complete']) === true) {
        return state;
    } else {

        if (state.getIn(['currentChallenge', 'currentNote']) === noteObj.get('note')) {
            newState = state.updateIn(['currentChallenge', 'correct'],
                    list => list.push(noteObj)
            );

            newState = newState.setIn(['currentChallenge', 'activeStringIndex'],
                getRandomString(state.getIn(['currentChallenge','activeStringIndex'])));

            newState = newState.setIn(['currentChallenge', 'currentNote'], getRandomNote());

        } else {
            newState = state.updateIn(['currentChallenge', 'error'],
                    list => list.push(noteObj)
            );
        }

        return newState;

    }

}