import Note from './Note';

function NotesList({ notes }) {
  return (
    <div>
      <h2>Notes</h2>
      {notes.length > 0 ? (
        notes.map((note, index) => <Note key={index} note={note} />)
      ) : (
        <p>No notes yet. Be the first to upload!</p>
      )}
    </div>
  );
}

export default NotesList;
