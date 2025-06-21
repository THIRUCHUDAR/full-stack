import React, { useState } from 'react';
import Login from './components/Login';
import AfterLogin from './components/AfterLogin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <AfterLogin /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
