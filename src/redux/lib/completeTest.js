
import { List, Map } from 'immutable'

export default (state) => {

    let newState = state.setIn(['currentChallenge','complete'],true);

    newState = newState.updateIn(['testHistory'], (testHistory) => {
        let historyItem = {
            correct: state.getIn(['currentChallenge', 'correct']),
            error: state.getIn(['currentChallenge', 'correct'])
        };

        return testHistory.push(historyItem);
    });

    return newState;

}