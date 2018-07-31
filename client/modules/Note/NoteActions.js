import callApi from '../../util/apiCaller';

// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';

// Export Actions
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
  };
}

export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData,
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    //console.log('note',note, laneId);

    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      //console.log('noteResp',noteResp, laneId);
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return (dispatch) => {
    return callApi('notes/${noteId}', 'delete', {noteId, laneId}).then(res => {
      dispatch(deleteNote(res));
    })
  }
}

export function updateNoteRequest(noteId) {
  return (dispatch) => {
    return callApi('notes/${noteId}', 'put', noteId).then(res => {
      dispatch(updateNote(res));
    })
  }
}
