import axios from "axios";
export default async function fetchgetNews(setfetchedData) {
    try {

      const response = await axios.get('http://192.168.77.18:18060/api/public/getNews?type=COIN')
       
     const  data = await response.data;
      
      if (response.status === 200 || response.status === 201) {
        setfetchedData(data.data[0].en.details);
        console.log('data is get successfully');
      }

    } catch(error) {
      console.log(error.message);
    }
  
  }
