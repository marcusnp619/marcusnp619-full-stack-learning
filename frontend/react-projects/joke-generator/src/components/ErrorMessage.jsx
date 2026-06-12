import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 shadow-lg">
      <div className="flex items-center">
        <span className="text-3xl mr-4">⚠️</span>
        <div>
          <p className="font-semibold text-lg">Oops! Something went wrong</p>
          <p className="text-red-600 mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;