import axios from "axios";
export default async function fetchgetNews(setfetchedData,setLoading,setError) {
  const apiUrl = process.env.REACT_APP_API_URL;
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/public/getNews?type=COIN`)
       
     const  data = await response.data;
      
      if (response.status === 200 || response.status === 201) {
       
        if(data.length === 0) {
          setError('Data is not found');
          setfetchedData([]);
        }else {
          setfetchedData(data.data[0].en.details);
          console.log('data is get successfully');
        }
    
          setLoading(false);    
      }

    } catch(error) {
      console.log(error.message);
      
        setLoading(false);
      setError(error.message);
    }
  
  }
