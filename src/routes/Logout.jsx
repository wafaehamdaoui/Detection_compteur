import React, { useEffect } from 'react';

export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/logout/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Include the JWT in the Authorization header
          },
        });

        console.log('Response', response);

        if (response.ok) {
          localStorage.clear();
          // Redirect to the home page or the login page after clearing the token
          // window.location.href = '/';
        } else {
          console.log('Logout not working');
        }
      } catch (e) {
        console.error('Logout not working', e);
      }
    })();
  }, []);

  return (
    <div>Logged out</div>
  );
};

export default Logout;
