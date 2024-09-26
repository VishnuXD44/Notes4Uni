import { useState } from 'react';

function PostNote({ addNote }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      addNote(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Upload a note to this group</h3>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" disabled={!selectedFile}>
        Upload Note
      </button>
    </form>
  );
}

export default PostNote;
