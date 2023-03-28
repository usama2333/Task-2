import axios from "axios";
export default async function fetchCardList(setData, notify , setLoading, setError,setShowData) {
  const apiUrl = process.env.REACT_APP_API_URL;
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/api/user/topCelebrities`)
       
     const  data = await response.data;
     console.log('This is card data ',data)
      
      if (response.status === 200 || response.status === 201) {
        if (data.length === 0) {
          setError("Data is not found");
          setShowData(true);
          // setData([]);
        } else {
          setLoading(false);
          setData(data.data);
          setShowData(false);
          console.log("data is get successfully");
        }
 
      }

    } catch(error) {
      console.log(error.message);
      setLoading(false);
      setError(error.message);
      setShowData(true);
   
      
    }
  
  }
