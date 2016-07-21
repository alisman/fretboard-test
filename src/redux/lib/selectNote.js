import { List, Map } from 'immutable'

export default (state, noteId) => {

    let noteIndex = state.get('currentChallenge').get('notes').findIndex((noteObj) => {
        return noteObj.get("id") === noteId;
    });

    let newState;

    if (noteIndex > -1) {
        newState = state.setIn(['currentChallenge', 'notes', noteIndex, 'selected'], true)
            .setIn(['currentChallenge', 'incorrectNoteSelected'], false);
    } else {
        newState = state.setIn(['currentChallenge', 'incorrectNoteSelected'], true);

        newState = newState.updateIn(['errorLog'],
                list => list.push(Map({ errorNoteId:noteId, note: state.get('currentChallenge').get('note')  }) ));
    }

    return newState;

}