import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '105fc71dd6mshbe39d9e76a984aep1ddd71jsned4fe9aa6bc0'
    }
  });

  return data;
};
