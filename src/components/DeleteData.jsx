import {useEffect} from "react";

export default function DeleteData ({typeofData, id}) {

  window.location.reload();           //this is not as efficent as using a different menthod. It may be better to have this inside the 
  
    
  

  useEffect(() => {
    if (typeofData && id) {
      async function fetchData() {
        try {
          const url =
            typeofData === 'Delete Income'
              ? `${import.meta.env.VITE_API_URL}/data/income/delete/${id}`
              : `${import.meta.env.VITE_API_URL}/data/expense/delete/${id}`;
          
          // Perform the DELETE request
          const response = await fetch(url, {
            method: 'DELETE', // Use DELETE method
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