import React from 'react';

function LyricsDisplay({ lyrics }) {
  return (
    <div className="w-full max-w-2xl mt-8 bg-white p-6 rounded-lg shadow-md">
      {lyrics ? (
        <pre className="text-gray-800 whitespace-pre-wrap">{lyrics}</pre>
      ) : (
        <p className="text-gray-800">No lyrics found</p>
      )}
    </div>
  );
}

export default LyricsDisplay;
