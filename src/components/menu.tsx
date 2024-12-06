"use client"; // Add this at the top

import * as React from 'react';
import Button from '@mui/material/Button';

export default function menu() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      {/* Domov (Home) Button */}
      <Button
        id="home-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
      >
        Domov
      </Button>
      
      {/* Prihlásenie/Odhlásenie Button */}
      <Button
        id="login-button"
        onClick={handleLoginLogout}
      >
        {isLoggedIn ? 'Odhlásenie' : 'Prihlásenie'}
      </Button>
    </div>
  );
}
