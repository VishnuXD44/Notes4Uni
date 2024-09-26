function Note({ note }) {
    return (
      <div className="note">
        <p>Uploaded File: {note.name}</p>
        <a href={URL.createObjectURL(note)} download={note.name}>
          Download {note.name}
        </a>
      </div>
    );
  }
  
  export default Note;
  