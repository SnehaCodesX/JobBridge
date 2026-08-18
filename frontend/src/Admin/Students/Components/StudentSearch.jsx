import React from "react";

const StudentSearch = ({ search, setSearch }) => {
  return (
    <div className="studentSearch">
      <span className="searchIcon">⌕</span>

      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default StudentSearch;
/* // Hero Section component */