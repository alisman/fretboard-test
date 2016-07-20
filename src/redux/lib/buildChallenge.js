import { default as Immutable } from 'immutable'

export default (strings, note) => {
    const noteSet = strings.reduce((memo, str) => {
        let newNotes = str.get("notes").filter((noteObj) => {
            return noteObj.get("note") === note;
        });
        memo.push(...newNotes);
        return memo;
    },new Array());
    return Immutable.fromJS({ note:note, notes:noteSet  });
};