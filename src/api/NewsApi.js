import axios from "axios";
export default async function fetchgetNews(setfetchedData,setLoading,setError) {
  const apiUrl = process.env.REACT_APP_API_URL;
    try {
      setLoading(true);
      // const response = await axios.get(`${apiUrl}/api/public/getNews?type=COIN`)
      const response = await axios.get('https://fakestoreapi.com/products')
       
     const  data = await response.data;
     console.log('News data');
     console.log('news' , data);
      
      if (response.status === 200 || response.status === 201) {
       
        if(data.length === 0) {
          setError('Data is not found');
          // setfetchedData([]);
        }else {
          // setfetchedData(data.data[0].en.details);
          setfetchedData('50% off on all Coins');
          console.log('data is get successfully');
        }
         setTimeout(() => {
          setLoading(false); 
         }, 500);
             
      }

    } catch(error) {
      console.log(error.message);
      setTimeout(() => {
        setLoading(false);
        setError(error.message);
      }, 500);
    
    }
  
  }
