import React from 'react';

function JokeCard({ joke, onCopy, showCopySuccess }) {
  // Get the joke text based on type
  const getJokeContent = () => {
    if (joke.type === 'twopart') {
      return (
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 text-sm font-semibold mb-2">Setup:</p>
            <p className="text-xl text-gray-900 font-medium">{joke.setup}</p>
          </div>
          <div className="border-t-2 border-gray-300 pt-6">
            <p className="text-gray-600 text-sm font-semibold mb-2">Punchline:</p>
            <p className="text-2xl text-gray-900 font-bold text-purple-600">{joke.delivery}</p>
          </div>
        </div>
      );
    } else {
      return (
        <p className="text-2xl text-gray-900 font-semibold leading-relaxed">
          {joke.joke}
        </p>
      );
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform transition-all hover:shadow-3xl">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full">
          {joke.category}
        </span>
        <span className="ml-2 inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full">
          {joke.type === 'twopart' ? '2️⃣ Two-Part' : '1️⃣ Single'}
        </span>
      </div>

      {/* Joke Content */}
      <div className="my-6">
        {getJokeContent()}
      </div>

      {/* Copy Button */}
      <div className="mt-6 flex items-center justify-between border-t-2 border-gray-200 pt-4">
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95"
        >
          📋 Copy Joke
        </button>
        
        {showCopySuccess && (
          <span className="text-green-600 font-semibold animate-pulse">
            ✓ Copied to clipboard!
          </span>
        )}
      </div>
    </div>
  );
}

export default JokeCard;