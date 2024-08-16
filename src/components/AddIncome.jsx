import React, {useState} from "react";

function AddIncome () {

const [formData, setFormData] = useState({
    date: "", totalincome: "", sidehustleincome: "", stockincome: "", other: ""
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
              await fetch("http://localhost:3000/api/data/income", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                  }
              });
              
        } catch (err) {
            console.log("An Error has ocurred", err);
        }
        
        
    }

    return (
        <div className="addIncome">
            <p>Add Income</p>
            <form>
                <label for="birthday">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                <br />
                <label for="totalincome">Total Income:</label><br />
                <input type="text" id="totalincome" name="totalincome" value={formData.totalincome} onChange={handleChange}/><br />
                <label for="sidehustleincome">Side Hustle Income:</label><br />
                <input type="text" id="sidehustleincome" name="sidehustleincome" value={formData.sidehustleincome} onChange={handleChange}></input><br />
                <label for="stockincome">Stock Income:</label><br />
                <input type="text" id="stockincome" name="stockincome" value={formData.stockincome} onChange={handleChange}></input><br />
                <label for="other">Other:</label><br />
                <input type="text" id="other" name="other" value={formData.other} onChange={handleChange}></input ><br />
                <br />
                <input type="submit" onClick={handleClick}/>
                </form>
        </div>
    )
}

export default AddIncome;