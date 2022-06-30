import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@fontsource/tajawal';
import Home from './Page/Home';
import Navbar from './components/Home/Navbar';
// import Navbar2 from './components/Navbar2/Navbar2';
import theme from './Theme/theme';
import About from './Page/About';
import Team from './Page/Team';
import Footer from './components/Footer/Footer';
import Login from './Page/Login';
import Profile from './components/profile/Profile';
import { LoginContext } from './context/LoginContext';
function App() {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
  };
  const searchBook = async evt => {
    if (evt.key === 'Enter' && search === '') {
      return;
    }
    try {
      if (evt.key === 'Enter') {
        const request = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&key=' +
            'AIzaSyAc_OUO3lg8uXQAiFtH0ahr9XSkRnqLroA' +
            '&maxResults=30'
        );

        const data = await request.json();
        setData(data.items);
        if (request.status == 400) {
          return;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const searchBook2 = async evt => {
      const request2 = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=ابتكار' +
          '&key=' +
          'AIzaSyAc_OUO3lg8uXQAiFtH0ahr9XSkRnqLroA' +
          '&maxResults=30'
      );

      const data2 = await request2.json();
      setData(data2.items);
    };
    searchBook2();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        {/* <Navbar2 /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onChange={onChange}
                search={search}
                searchBook={searchBook}
                bookData={bookData}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/Team" element={<Team />} />
        </Routes>
        <LoginContext.Provider
          value={{ username, setUsername, setShowProfile }}
        >
          {showProfile ? (
            <Routes>
              <Route path="/Login" element={<Profile />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/Login" element={<Login />} />
            </Routes>
          )}
        </LoginContext.Provider>

        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
