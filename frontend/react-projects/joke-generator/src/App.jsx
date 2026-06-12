import React, { useState, useEffect } from 'react';
import JokeCard from './components/JokeCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('Any');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // Fetch joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  // Fetch joke from API
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${category}?format=json`,
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error('API returned an error');
      }

      setJoke(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch joke. Please try again.');
      console.error('Error fetching joke:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Get joke text based on type
  const getJokeText = () => {
    if (!joke) return '';
    return joke.type === 'twopart' 
      ? `${joke.setup} ${joke.delivery}` 
      : joke.joke;
  };

  // Copy joke to clipboard
  const copyToClipboard = async () => {
    try {
      const jokeText = getJokeText();
      await navigator.clipboard.writeText(jokeText);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">😂 Joke Generator</h1>
          <p className="text-xl text-white/90">Get a random joke to brighten your day!</p>
        </div>

        {/* Category Selector */}
        <div className="mb-6 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <label className="block text-white font-semibold mb-3">
            Select Joke Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all cursor-pointer"
          >
            <option value="Any">Any</option>
            <option value="Programming">Programming</option>
            <option value="General">General</option>
            <option value="Knock-knock">Knock-knock</option>
          </select>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Joke Display */}
        {!loading && joke && (
          <JokeCard 
            joke={joke} 
            onCopy={copyToClipboard}
            showCopySuccess={showCopySuccess}
          />
        )}

        {/* Get Joke Button */}
        <button
          onClick={fetchJoke}
          disabled={loading}
          className="w-full mt-6 px-6 py-4 bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-400 text-gray-900 font-bold text-lg rounded-lg shadow-lg transform transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
        >
          {loading ? 'Loading...' : '🎲 Get Another Joke'}
        </button>

        {/* Footer */}
        <div className="mt-8 text-center text-white/80 text-sm">
          <p>Made with ❤️ using React & JokeAPI</p>
          <p className="mt-2">Learn more: <a href="https://jokeapi.dev/" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">JokeAPI</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;