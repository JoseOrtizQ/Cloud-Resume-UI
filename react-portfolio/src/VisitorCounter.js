import React, { useEffect, useState } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to increment visitor count
    const incrementVisitorCount = async () => {
      try {
        // POST request to increment the count
        const response = await fetch('https://f1lwey3yb6.execute-api.ca-central-1.amazonaws.com/prod', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCount(data.count);
        setError(null);
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
        setError('Error loading visitor count');
        setCount('Error');
      }
    };

    // Call the function when component mounts
    incrementVisitorCount();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-4 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="text-center mt-4 text-white">
      This website has been visited{' '}
      <span className="font-bold text-yellow-400">
        {count}
      </span>{' '}
      {count === 1 ? 'time' : 'times'}.
    </div>
  );
}

export default VisitorCounter;