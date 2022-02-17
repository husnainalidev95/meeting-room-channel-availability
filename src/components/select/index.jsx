import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MUISelect({ options, handleFilterChange }) {
  const [selectedChannel, setSelectedChannel] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedChannel(value);
    handleFilterChange(value);
  };

  return (
    <Box sx={{ maxWidth: 200, mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="channel-filter">Filter By Channel</InputLabel>
        <Select
          labelId="channel-filter"
          id="channel-filter"
          value={selectedChannel}
          label="Filter By Channel"
          onChange={handleChange}
        >
          <MenuItem value={0}>Show All</MenuItem>
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
