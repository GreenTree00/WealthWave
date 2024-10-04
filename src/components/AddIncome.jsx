import React, {useState} from "react";
import FormInput from "./FormInput";

export default function AddIncome () {

const [formData, setFormData] = useState({
    date: "", jobincome: "", sidehustleincome: "", stockincome: "", other: "", totalincome: ""
})
    
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/data/income`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                  }
              });
              if(!response.ok) {
                alert("Please my sure to fill in all fields, and only use numbers")
              } else {
                setFormData({
                    date: "", jobincome: "", sidehustleincome: "", stockincome: "", other: "", totalincome: ""
                });
            }
        } catch (err) {
            console.log(err);
            alert("There was an error connecting to the server. Please try again later")
        } 
    }

    return (
        <div>
            <p className="title">Add Income</p>
            <form className="box custom-box">
                <FormInput For={"date"} Type={"date"} ID={"date"} Name={"date"} Value={formData.date} OnChange={handleChange}>Date:</FormInput>
                <FormInput For={"jobincome"} Type={"text"} ID={"jobincome"} Name={"jobincome"} Value={formData.jobincome} OnChange={handleChange}>Job Income:</FormInput>
                <FormInput For={"sidehustleincome"} Type={"text"} ID={"sidehustleincome"} Name={"sidehustleincome"} Value={formData.sidehustleincome} OnChange={handleChange}>Side Hustle Income:</FormInput>
                <FormInput For={"stockincome"} Type={"stockincome"} ID={"stockincome"} Name={"stockincome"} Value={formData.stockincome} OnChange={handleChange}>Stock Income:</FormInput>
                <FormInput For={"other"} Type={"text"} ID={"other"} Name={"other"} Value={formData.other} OnChange={handleChange}>Other:</FormInput>
                <FormInput For={"totalincome"} Type={"text"} ID={"totalincome"} Name={"totalincome"} Value={formData.totalincome} OnChange={handleChange}>Total Income:</FormInput>
                <input className="button is-primary" type="submit" onClick={handleClick}/>
                </form>
        </div>
    )
}