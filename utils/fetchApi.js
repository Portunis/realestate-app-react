import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '89d03954f0mshe8ca59b7daa7fb7p1ae554jsn83d31cc6550a'
        }
    })
    return data;
}