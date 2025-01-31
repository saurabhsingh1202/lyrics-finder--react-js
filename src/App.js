import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import LyricsDisplay from './components/LyricsDisplay';

function App() {
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const fetchLyrics = async (artist, title) => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
        setError('');
      } else {
        throw new Error('Lyrics not found');
      }
    } catch (error) {
      setLyrics('');
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8">🎶 Lyrics App 🎶</h1>
      <SearchBar fetchLyrics={fetchLyrics} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <LyricsDisplay lyrics={lyrics} />
    </div>
  );
}

export default App;  