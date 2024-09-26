import { useState } from 'react';

function CourseGroupList({ groups, addGroup, selectGroup }) {
  const [groupName, setGroupName] = useState('');

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      addGroup(groupName);
      setGroupName('');
    }
  };

  return (
    <div>
      <h2>Courses</h2>
      <form onSubmit={handleCreateGroup}>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter new group name"
        />
        <button type="submit">Create Group</button>
      </form>
      <ul>
        {groups.map((group, index) => (
          <li key={index} onClick={() => selectGroup(group)} style={{ cursor: 'pointer' }}>
            {group}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseGroupList;
