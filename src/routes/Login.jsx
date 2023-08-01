import React, { useState, useRef, } from 'react'
import SahabLogo from '../assets/img/sahab_logo.png'
import { Box, Button, Paper, TextField } from '@mui/material'

function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const passwordRef = useRef(null);

  const login = (username, password) => {
    const data = {
      username,
      password
    };
    const url = "http://127.0.0.1:8000/api/token/";
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response: ", data);
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (event.target === passwordRef.current) {
        // If the Enter key is pressed in the password field, trigger the "Confirmer" button click
        login(username, password)
          .then((responseData) => {
            console.log('Logged in successfully:', responseData);
            // Initialize the access & refresh token in localstorage.      
         localStorage.clear();
         localStorage.setItem('access_token', data.access);
         localStorage.setItem('refresh_token', data.refresh);
         axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
         if (data && data.token) {
          // Redirect to the /admin page using react-router-dom
          window.location.href('/admin/')
        }
                                        
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error during login:', error);
          });
      } else {
        // If the Enter key is pressed in the username field, move focus to the password field
        passwordRef.current.focus();
      }
      event.preventDefault(); // Prevent default form submission behavior
    }
  };
  return (
    
    <body class="body-loginA">

      <div class="div-loginA">
        <div>
          <a><img src={SahabLogo} className="" alt="React logo"/></a>
        </div>
        <span id="#line" class="vertical-line-loginA"></span>
        <div class="div-login-inputs">
          
            <h2 class="big-title-sidentifier-loginA">Login</h2>
          
          <div>
            <form>
              <div class="petit-formA">
                <div>      
                <Paper sx={{ width: 500, height: 280, display: "flex", flexDirection: 'column', m: 2 }}>

<TextField
sx={{ m: 2, mt:3}}
label="Username"
variant="outlined"
value={username}
onChange={(e) => setUsername(e.target.value)}
onKeyPress={handleKeyPress} 
/>
<TextField
inputRef={passwordRef}
sx={{ m: 2}}
label="Password"
variant="outlined"
value={password}
type="password"
onChange={(e) => setPassword(e.target.value)}
onKeyPress={handleKeyPress} 
/>
<Button
sx={{ m: 2, mt: 3 }}
variant="contained"
onClick={() => {
  login(username, password)
.then((responseData) => {
// Handle the response data here
console.log("Logged in successfully:", responseData);

})
.catch((error) => {
// Handle errors here
console.error("Error during login:", error);
});
}}

>Confirmer</Button>

</Paper>
                </div>

              </div>
            </form>
          </div>




        </div>

      </div>


    </body>



  )
}

export default Login