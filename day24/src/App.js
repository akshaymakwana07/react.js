import logo from './logo.svg';
import './App.css';
import Datafech from './Datafech';
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData({ message: '' });
      setLoading(false);
    }, 2000);
  }, []);
  return (
 <>
 {loading ? <Loader /> : <div>{data.message}</div>}
 <Datafech/>
 </>
  );
}

export default App;
