import { useState, useEffect } from 'react';
import { venuesApi } from '../api/venues';

// Custom Hook to fetch venues, change status on json server and get venues by filter
function UseVenues() {
  // states to save data. data state keeps the orignal data and filtered data keeps the filtered data based on selected channel
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // get venues from Json server when components mount
  useEffect(() => {
    getVenues();
  }, []);

  // function to fetch venues from json server
  const getVenues = async () => {
    try {
      const res = await venuesApi.getVenues();
      setData(res.data);
      setFilteredData(res.data);
    } catch (err) {
      console.log('err', err);
    }
  };

  // function to change the visibility of venue on specific channel
  const handleStatusChange = async (data) => {
    try {
      await venuesApi.handleStatusChange(data);
      getVenues();
    } catch (err) {
      console.log('err', err);
    }
  };

  // function to filter data according to selected channel and save the filtered data in state.
  const handleFilterChange = (channelId) => {
    if (channelId === 0) {
      setFilteredData(data);
      return;
    }
    const filteredDataOnChannelId = data.filter(x => x.channel.id === channelId);
    setFilteredData(filteredDataOnChannelId);
  };

  // returning filteredData(state), handleStatusChange and hanldeFilterChange function.
  return { filteredData, handleStatusChange, handleFilterChange };
}

export default UseVenues;