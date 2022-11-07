import { useState, useEffect } from "react";
import axios from "axios";
import { getLocation } from "./api/api";

const App = () => {
  // console.log(
  //   "https://geo.ipify.org/api/v2/country,city?apiKey=at_Mw4QkUjF9zW747QL0bCuzuY4kveXa&ipAddress=93.41.3.9"
  // );

  // console.log(getLocation)
  // console.log(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`);
  // console.log(
  //   "https://geo.ipify.org/api/v2/country,city?apiKey=at_Mw4QkUjF9zW747QL0bCuzuY4kveXa"
  // );

  /// --- solution 1
  // const [ip, setIP] = useState();

  // useEffect(()=> {
  //   const fetchData = async() => {
  //     const response = await fetch(process.env.REACT_APP_API)
  //     const data = await response.json()
  //     setIP(data);
  //   };
  //   fetchData();
  // }, [])

  // console.log(ip);

  // ---- key console log

  // console.log(process.env.REACT_APP_IP_KEY);
  // console.log(process.env.REACT_APP_API);

  // Solution 2
  // const [location, setLocation] = useState("");
  // const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_KEY}`;

  // useEffect(()=> {
  //   const getLocation = async () => {
  //     const result = await axios.get(apiURL).then((data) => setLocation(data));

  //     return result;
  //   };
  //   getLocation();
  // }, [])

  // console.log(location);

  // console.log(process.env.REACT_APP_API_KEY);

  // --- solution 3
  const [location, setLocation] = useState("");

  useEffect(() => {
    getLocation().then(data => setLocation(data));
  }, []);

  console.log(location)

  

  return (
    <div>
      <div>
        {" "}
        hiiiiii
        {/* solution 1 */}
        {/* {ip && ip.ip} */}
        {/* solution2 */}
        {/* {location.data.ip} */}
        {location.data.ip}
      </div>
    </div>
  );
};

export default App;
