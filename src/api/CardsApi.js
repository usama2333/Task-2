import axios from "axios";
export default async function fetchCardList(setData) {
    try {

      const response = await axios.post('http://192.168.77.18:18060/api/user/topCelebrities')
       
     const  data = await response.data;
     console.log('This is card data ',data)
      
      if (response.status === 200 || response.status === 201) {
        console.log('Card data is get successfully');
        setData(data.data);
      }

    } catch(error) {
      console.log(error.message);
      
    }
  
  }
