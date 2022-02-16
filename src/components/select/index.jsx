import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MUISelect() {
  const [selectedChannel, setSelectedChannel] = React.useState('');

  const handleChange = (event) => {
    setSelectedChannel(event.target.value);
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
          <MenuItem value='booking.com'>Booking.com</MenuItem>
          <MenuItem value='trivago.com'>Trivago</MenuItem>
          <MenuItem value='bookme.pk'>Bookme.pk</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
