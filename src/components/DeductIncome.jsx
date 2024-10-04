import React, {useState} from "react";
import FormInput from "./FormInput";

export default function DeductIncome () {

        const [formData, setFormData] = useState({
           date: "", housing: "", food: "", transportation: "", insurance: "", entertainment: "", other: "", totalexpense: ""
        });
        
            
            const handleChange = (event) => {
                const {name, value} = event.target;
                setFormData({
                    ...formData,
                    [name]: value
                });
            };
        
            const handleClick = async (event) => {
                event.preventDefault()
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/data/expense`, {
                      method: "POST",
                      body: JSON.stringify(formData),
                      headers: {
                          "Content-Type": "application/json",
                        }
                    });
                    if (!response.ok) {
                        alert("Please my sure to fill in all fields, and only use numbers")
                    } else {
                        setFormData({
                            date: "", housing: "", food: "", transportation: "", insurance: "", entertainment: "", other: "", totalexpense: ""
                     });
                    }
              } catch (err) {
                  console.log("An Error has ocurred", err);
                  alert("There was a problem adding this data. Please try again later");
              }
            }

    return (
        <div>
                <p className="title">Add Expense</p>
                <form className="box custom-box">
                <FormInput For={"date"} Type={"date"} ID={"date"} Name={"date"} Value={formData.date} OnChange={handleChange}>Date:</FormInput>
                <FormInput For={"housing"} Type={"text"} ID={"housing"} Name={"housing"} Value={formData.housing} OnChange={handleChange}>Housing:</FormInput>
                <FormInput For={"food"} Type={"text"} ID={"food"} Name={"food"} Value={formData.food} OnChange={handleChange}>Food:</FormInput>
                <FormInput For={"transportation"} Type={"text"} ID={"transportation"} Name={"transportation"} Value={formData.transportation} OnChange={handleChange}>Transportation:</FormInput>
                <FormInput For={"insurance"} Type={"text"} ID={"insurance"} Name={"insurance"} Value={formData.insurance} OnChange={handleChange}>Insurance:</FormInput>
                <FormInput For={"entertainment"} Type={"entertainment"} ID={"text"} Name={"entertainment"} Value={formData.entertainment} OnChange={handleChange}>Entertainment:</FormInput>
                <FormInput For={"other"} Type={"other"} ID={"text"} Name={"other"} Value={formData.other} OnChange={handleChange}>Other:</FormInput>
                <FormInput For={"totalexpense"} Type={"text"} ID={"totalexpense"} Name={"totalexpense"} Value={formData.totalexpense} OnChange={handleChange}>Total Expense:</FormInput>
                <input className="button is-primary" type="submit" onClick={handleClick}/>
                </form>
        </div>
    )
}