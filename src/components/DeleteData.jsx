import {useEffect} from "react";

export default function DeleteData ({typeofData, id}) {

  useEffect(() => {
    if (typeofData && id) {
      async function fetchData() {
        try {
          const url =
            typeofData === 'Delete Income'
              ? `${import.meta.env.VITE_API_URL}/data/income/delete/${id}`
              : `${import.meta.env.VITE_API_URL}/data/expense/delete/${id}`;
          const response = await fetch(url, {
            method: 'DELETE', 
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log("Delete successful");
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
      
    }
  }, []);
return (null)
}