import axios from "axios";
export default async function fetchcoinList(setData, setLoading, setError,setShow) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    setLoading(true);
    const response = await axios.get(`${apiUrl}/api/public/getCoinList`);

    const data = await response.data;

    if (response.status === 200 || response.status === 201) {
      console.log("Coin data is get successfully");
      if (data.length === 0) {
        setError("Data is not found");
        setShow(true);
        // setData([]);
      } else {
        setData(data.data);
        setShow(false);
        console.log("data is get successfully");
      }

      setTimeout(() => {
        setLoading(false); 
       }, 1000);
    }
  } catch (error) {
    console.log(error.message);

    setTimeout(() => {
      setLoading(false); 
     }, 1000);
    setError(error.message);
    setShow(true);
  }
}
