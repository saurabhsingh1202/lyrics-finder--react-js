import React, { useState } from 'react';

function SearchBar({ fetchLyrics }) {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    // Call fetchLyrics from the parent component with artist and title
    fetchLyrics(artist, title);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <input
        type="text"
        placeholder="Artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
