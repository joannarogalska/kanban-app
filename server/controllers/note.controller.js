import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.laneId = laneId;
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNoteFromLine(req, res) {
  console.log('test asi 0: ',req);
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }

    Lane.findOne({ id: note.id })
      .then(lane => {
        var filteredNotes = lane.notes.filter(note => note.id !== req.params.noteId);
        lane.update({ notes: filteredNotes }), (error) => {
          if (error) {
            res.status(500).send(error);
          }
          res.status(200).end();
        }
      });


    note.remove(() => {
      res.status(200).end();
    });

  });
}

export function editTextNote(req, res) {
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    const newTask = req.body.task;
    note.task = newTask;

    note.save((err, saveNote) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saveNote);
    });

  });
}
