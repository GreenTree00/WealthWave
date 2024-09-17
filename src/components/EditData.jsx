import {useState, useEffect} from "react";
import FormInput from "./FormInput";

export default function EditData ({typeofData, id}) {

  const [formData, setFormData] = useState({});

    function handleEdit (event) {
      const {name, value} = event.target;
      setFormData((prevValue) => ({
        ...prevValue,
        [name]: value
      }));
    }

    console.log(formData);

    useEffect(() => {
      if (typeofData && id) {
        async function fetchData() {
          try {
            const url =
              typeofData === 'Edit Income'
                ? `${import.meta.env.VITE_API_URL}/data/income/${id}`
                : `${import.meta.env.VITE_API_URL}/data/expense/${id}`;
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const fetchedData = typeofData === 'Edit Income' ? data.resInc : data.resExp;
            setFormData(fetchedData);
            console.log(fetchedData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }
    }, [typeofData, id]);

    async function submitEdit(type) {
      const url =
        type === 'Income'
          ? `${import.meta.env.VITE_API_URL}/data/income/${id}`
          : `${import.meta.env.VITE_API_URL}/data/expense/${id}`;
      try {
        await fetch(url, {
          method: 'PATCH',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error(`Error updating your ${type}:`, error);
      }
    }
  
    

    return  (
      <>
      {typeofData=="Edit Income"?
      <div>
            <p className="title">{typeofData} {id}</p>
            <form className="box custom-box">
                <FormInput For={"date"} Type={"date"} ID={"date"} Name={"date"} Value={formData.date} OnChange={handleEdit}>Date:</FormInput>
                <FormInput For={"jobincome"} Type={"text"} ID={"job_income"} Name={"job_income"} Value={formData.job_income} OnChange={handleEdit}>Job Income:</FormInput>
                <FormInput For={"sidehustleincome"} Type={"text"} ID={"side_hustle_income"} Name={"side_hustle_income"} Value={formData.side_hustle_income} OnChange={handleEdit}>Side Hustle Income:</FormInput>
                <FormInput For={"stockincome"} Type={"text"} ID={"stock_income"} Name={"stock_income"} Value={formData.stock_income} OnChange={handleEdit}>Stock Income:</FormInput>
                <FormInput For={"other"} Type={"text"} ID={"other"} Name={"other"} Value={formData.other} OnChange={handleEdit}>Other:</FormInput>
                <FormInput For={"totalincome"} Type={"text"} ID={"total_income"} Name={"total_income"} Value={formData.total_income} OnChange={handleEdit}>Total Income:</FormInput>
                <input className="button is-primary" type="submit" onClick={() =>submitEdit("Income")}/>
                </form>
        </div>
        :undefined}
        {typeofData=="Edit Expense"?
        <div>
                <p className="title">{typeofData} {id}</p>
                <form className="box custom-box">
                <FormInput For={"date"} Type={"date"} ID={"date"} Name={"date"} Value={formData.date} OnChange={handleEdit}>Date:</FormInput>
                <FormInput For={"housing"} Type={"text"} ID={"housing"} Name={"housing"} Value={formData.housing} OnChange={handleEdit}>Housing:</FormInput>
                <FormInput For={"food"} Type={"text"} ID={"food"} Name={"food"} Value={formData.food} OnChange={handleEdit}>Food:</FormInput>
                <FormInput For={"transportation"} Type={"text"} ID={"transportation"} Name={"transportation"} Value={formData.transportation} OnChange={handleEdit}>Transportation:</FormInput>
                <FormInput For={"insurance"} Type={"text"} ID={"insurance"} Name={"insurance"} Value={formData.insurance} OnChange={handleEdit}>Insurance:</FormInput>
                <FormInput For={"entertainment"} Type={"text"} ID={"text"} Name={"entertainment"} Value={formData.entertainment} OnChange={handleEdit}>Entertainment:</FormInput>
                <FormInput For={"other"} Type={"text"} ID={"text"} Name={"other"} Value={formData.other} OnChange={handleEdit}>Other:</FormInput>
                <FormInput For={"totalexpense"} Type={"text"} ID={"total_expense"} Name={"total_expense"} Value={formData.total_expense} OnChange={handleEdit}>Total Expense:</FormInput>
                <input className="button is-primary" type="submit" onClick={() => submitEdit("Expense")}/>
                </form>
          </div>
          :undefined}
        </>
    )
}