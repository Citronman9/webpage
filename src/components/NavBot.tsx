<<<<<<< HEAD
'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
=======
'use client'; // Mark this as a Client Component

import * as React from 'react';
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
<<<<<<< HEAD
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

export default function NavBot() {
  const { data: session } = useSession();  // Get session data
  const router = useRouter();
  const [value, setValue] = useState(0);

  // Navigation items based on auth status
  const navItemsUnauthenticated = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Prihlásiť', icon: <LoginIcon />, path: '/auth/prihlasenie' },
    { label: 'Registrovať', icon: <HowToRegIcon />, path: '/auth/registracia' },
  ];

  const navItemsAuthenticated = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Pridať', icon: <PostAddIcon />, path: '/prispevok/novy' },  // Add new post
    {
      label: 'Profil',
      icon: session?.user?.image ? <Avatar src={session.user.image} alt="Profile" /> : <PersonIcon />,
      path: '/profil',
    },
    { label: 'Odhlásiť', icon: <LogoutIcon />, path: '/' },
=======
import { useRouter } from 'next/navigation';

export default function NavBot() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const navItems = [
    { label: 'Domov', icon: <HomeIcon />, path: '/' },
    { label: 'Profily', icon: <PersonIcon />, path: '/profil' },
    { label: 'Prispevky', icon: <PostAddIcon />, path: '/prispevok' },
    { label: 'Prihlasit', icon: <LoginIcon />, path: '/auth/prihlasenie' },
    { label: 'Registrovat', icon: <HowToRegIcon />, path: '/auth/registracia' },
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
  ];

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
<<<<<<< HEAD
    const selectedItem = session ? navItemsAuthenticated[newValue] : navItemsUnauthenticated[newValue];
    if (selectedItem.label === 'Odhlásiť') {
      signOut({ callbackUrl: '/' });  // Log out
    } else {
      router.push(selectedItem.path);  // Navigate
    }
=======
    router.push(navItems[newValue].path); // Navigate to the selected path
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
<<<<<<< HEAD
      {(session ? navItemsAuthenticated : navItemsUnauthenticated).map((item, index) => (
=======
      {navItems.map((item, index) => (
>>>>>>> 2b155c5afbcee29583ea69f63999447c09a3d081
        <BottomNavigationAction
          key={index}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
}
