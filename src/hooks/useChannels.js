import { useState, useEffect } from 'react';
import axios from 'axios';

function UseChannels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels();
  }, []);

  const getChannels = async () => {
    const channels = await axios.get('http://localhost:3001/channels');
    setChannels(channels.data);
  };

  return { channels };
}

export default UseChannels;