// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseGroupList from './components/CourseGroupList';
import CourseGroup from './components/CourseGroup';
import LandingPage from './pages/LandingPage'; // Ensure you've created this component
import './App.css';
import './index.css';

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notesByGroup, setNotesByGroup] = useState({});

  const addGroup = (groupName) => {
    setGroups([...groups, groupName]);
    setNotesByGroup({ ...notesByGroup, [groupName]: [] });
  };

  const selectGroup = (groupName) => {
    setSelectedGroup(groupName);
  };

  const addNoteToGroup = (note) => {
    setNotesByGroup({
      ...notesByGroup,
      [selectedGroup]: [note, ...notesByGroup[selectedGroup]],
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={
          <div className="App">
            <h1>NOTES 4 UNI</h1>
            <CourseGroupList
              groups={groups}
              addGroup={addGroup}
              selectGroup={selectGroup}
            />
            {selectedGroup && (
              <CourseGroup
                groupName={selectedGroup}
                notes={notesByGroup[selectedGroup]}
                addNote={addNoteToGroup}
              />
            )}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

