/**
 * Joke Service
 * Handles all API calls to JokeAPI
 */

const JOKE_API_BASE = 'https://v2.jokeapi.dev/joke';

/**
 * Fetch a random joke from JokeAPI
 * @param {string} category - Joke category (Any, Programming, General, Knock-knock)
 * @returns {Promise<Object>} - Joke data from API
 */
export const fetchJokeFromAPI = async (category = 'Any') => {
  try {
    const response = await fetch(`${JOKE_API_BASE}/${category}?format=json`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error('No joke available for this category');
    }

    return data;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};

/**
 * Format joke text based on type
 * @param {Object} joke - Joke object from API
 * @returns {string} - Formatted joke text
 */
export const formatJokeText = (joke) => {
  if (joke.type === 'twopart') {
    return `${joke.setup}\n${joke.delivery}`;
  }
  return joke.joke;
};

/**
 * Get available joke categories
 * @returns {Array<string>} - List of available categories
 */
export const getCategories = () => [
  'Any',
  'Programming',
  'General',
  'Knock-knock',
];

/**
 * Share joke to clipboard
 * @param {string} jokeText - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const shareToClipboard = async (jokeText) => {
  try {
    await navigator.clipboard.writeText(jokeText);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};