import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'aad2239cd0mshd1a3d4bea12658dp14a4cfjsn528784756050'
      }
  });
    
  return data;
}