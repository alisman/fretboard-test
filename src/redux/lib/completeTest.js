
import { List, Map } from 'immutable'

export default (state) => {

    let newState = state.setIn(['currentChallenge','complete'],true);

    return newState;

}