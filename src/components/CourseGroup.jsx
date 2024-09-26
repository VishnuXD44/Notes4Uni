import PostNote from './PostNote';
import NotesList from './NotesList';

function CourseGroup({ groupName, notes, addNote }) {
  return (
    <div>
      <h2>{groupName}</h2>
      <PostNote addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default CourseGroup;
