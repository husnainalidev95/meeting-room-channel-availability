import axios from 'axios';

const getChannels = () => {
  return axios({
    method: 'GET',
    url: `/channels`,
  })
}

export const channelApi = {
  getChannels
}