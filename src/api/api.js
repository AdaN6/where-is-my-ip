import axios from "axios";



const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_KEY}`;


export const getLocation = async () => {
   const result = await axios.get(apiURL).then((data) => data);

   return result;


 };

