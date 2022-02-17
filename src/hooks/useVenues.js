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

  const handleFilterChange = (channelId) => {
    if (channelId === 0) {
      setFilteredData(data);
      return;
    }
    const filteredDataOnChannelId = data.filter(x => x.channel.id === channelId);
    setFilteredData(filteredDataOnChannelId);
  };

  return { filteredData, handleFilterChange };
}

export default UseVenues;