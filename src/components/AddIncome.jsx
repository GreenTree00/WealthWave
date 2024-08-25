import React, {useState} from "react";

function AddIncome () {

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
              await fetch(`${import.meta.env.VITE_API_URL}/data/income`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                  }
              });
              setFormData({
                date: "", jobincome: "", sidehustleincome: "", stockincome: "", other: "", totalincome: ""
            });
        } catch (err) {
            console.log(err);
            alert("There was an error connecting to the server. Please try again later")
        }
        
        
    }

    return (
        <div>
            <p>Add Income</p>
            <form className="box">
                <div className="field">
                <label className="label" for="date">Date:</label>
                <div className="control">
                <input className="input" type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                </div>
                </div>
                <div className="field">
                <label className="label" for="jobincome">Job Income:</label><br />
                <div className="control">
                <input className="input" type="text" id="jobincome" name="jobincome" value={formData.jobincome} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="sidehustleincome">Side Hustle Income:</label><br />
                <div className="control">
                <input className="input" type="text" id="sidehustleincome" name="sidehustleincome" value={formData.sidehustleincome} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="stockincome">Stock Income:</label><br />
                <div className="control">
                <input className="input" type="text" id="stockincome" name="stockincome" value={formData.stockincome} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="other">Other:</label><br />
                <div className="control">
                <input className="input" type="text" id="other" name="other" value={formData.other} onChange={handleChange}></input ><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="totalincome">Total Income:</label><br />
                <div className="control">
                <input className="input" type="text" id="totalincome" name="totalincome" value={formData.totalincome} onChange={handleChange}/><br />
                </div>
                </div>
                <input className="button is-primary" type="submit" onClick={handleClick}/>
                </form>
        </div>
    )
}

export default AddIncome;