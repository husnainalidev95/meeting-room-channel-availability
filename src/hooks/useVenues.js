import { useState, useEffect } from 'react';
import axios from 'axios';

function UseVenues() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getVenues();
  }, []);

  const getVenues = async () => {
    const venues = await axios.get('http://localhost:3001/venues');
    setData(venues.data);
    setFilteredData(venues.data);
  };

  return { filteredData };
}

export default UseVenues;