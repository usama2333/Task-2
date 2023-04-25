import axios from "axios";
export default async function fetchCardList(setData, notify , setLoading, setError,setShowData) {
  const apiUrl = process.env.REACT_APP_API_URL;
    try {
      setLoading(true);
      // const response = await axios.post(`${apiUrl}/api/user/topCelebrities`)
      const response = await axios.get('https://fakestoreapi.com/products');
       
     const  data = await response.data;
     console.log('This is card data ',data)
      
      if (response.status === 200 || response.status === 201) {
        if (data.length === 0) {
          setError("Data is not found");
          setShowData(true);
          // setData([]);
        } else {
          setTimeout(() => {
            setLoading(false); 
           }, 1000);
          // setData(data.data);
          const data = [
            {
              userName : 'Neil',
              coinV2FValue : '0.33333$',
              coinName : 'Crypt',
              coinValue : '20$',
              
            },
  
            
          ]
          setData(data);
          setShowData(false);
          console.log("data is get successfully");
        }
 
      }

    } catch(error) {
      console.log(error.message);
      setTimeout(() => {
        setLoading(false); 
       }, 1000);
      setError(error.message);
      setShowData(true);
    }
  
  }
