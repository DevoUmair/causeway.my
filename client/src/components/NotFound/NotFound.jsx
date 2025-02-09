import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="mt-6 inline-block bg-primaryCM text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
