import React, { useEffect, useState } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState('Loading...');

  useEffect(() => {
    // Replace this URL with your actual AWS API Gateway endpoint
    fetch('https://4wzcnc139b.execute-api.ca-central-1.amazonaws.com/prod')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCount(data.count);
      })
      .catch(error => {
        console.error('Error fetching counter:', error);
        setCount('Error');
      });
  }, []);

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