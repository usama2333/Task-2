import axios from "axios";
export default async function fetchcoinList(setData) {
    try {

      const response = await axios.get('http://192.168.77.18:18060/api/public/getCoinList')
       
     const  data = await response.data;
      
      if (response.status === 200 || response.status === 201) {
        console.log('Coin data is get successfully');
        setData(data.data);
      }

    } catch(error) {
      console.log(error.message);
      
    }
  
  }
