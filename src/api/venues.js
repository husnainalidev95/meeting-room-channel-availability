import axios from 'axios';

const getVenues = async () => {
  return axios({
    method: 'GET',
    url: `/venues`,
  })
}

const handleStatusChange = (data) => {
  return axios({
    method: 'PUT',
    url: `/venues/${data.id}`,
    data: data
  })
}

export const venuesApi = {
  getVenues,
  handleStatusChange
}