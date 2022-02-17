import { useState, useEffect } from 'react';
import { channelApi } from '../api/channels';

// Custom Hook to fetch channels from json server
function UseChannels() {
  // channel state
  const [channels, setChannels] = useState([]);

  // call getchannels function when component mount
  useEffect(() => {
    getChannels();
  }, []);

  // function to fetch channels
  const getChannels = async () => {
    try {
      const res = await channelApi.getVenues();
      setChannels(res.data);
    } catch (err) {
      console.log('err', err);
    }
  };

  // return the list of channel
  return { channels };
}

export default UseChannels;