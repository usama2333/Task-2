import axios from "axios";

import v2flogo from '../assests/images/v2flogo.png';
import neil from '../assests/images/neil.png';
import zing from '../assests/images/zing.png';
export default async function fetchcoinList(setData, setLoading, setError,setShow) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    setLoading(true);
    // const response = await axios.get(`${apiUrl}/api/public/getCoinList`);
    const response = await axios.get('https://fakestoreapi.com/products');

    const data = await response.data;

    if (response.status === 200 || response.status === 201) {
      console.log("Coin data is get successfully");
      if (data.length === 0) {
        setError("Data is not found");
        setShow(true);
        // setData([]);
      } else {
        // setData(data.data);
        const data = [
          {
            name : 'V2F',
            imageURL : v2flogo,
            price : '20',
            stageName : 'Crypto',
            startDate : '03-2023',
            FinalDate : '06-2023',
            remainingSupply : '400000',
            totalSupply : '5599999.77'
          },

          {
            name : 'Zing',
            imageURL : zing,
            price : '10',
            stageName : 'Crypto',
            startDate : '02-2023',
            FinalDate : '06-2023',
            remainingSupply : '1100000',
            totalSupply : '38899999'
          },

          {
            name : 'Neil',
            imageURL : neil,
            price : '2',
            stageName : 'Crypto',
            startDate : '01-2023',
            FinalDate : '04-2023',
            remainingSupply : '567576',
            totalSupply : '66655443'
          }
        ]
        setData(data)
        setShow(false);
        console.log("data is get successfully");
      }

      setLoading(false);
    }
  } catch (error) {
    console.log(error.message);
    setLoading(false);
    setError(error.message);
    setShow(true);
  }
}
