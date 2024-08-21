import React, {useState} from "react";

function DeductIncome () {

        const [formData, setFormData] = useState({
           date: "", totalexpense: "", housing: "", food: "", transportation: "", insurance: "", other: ""
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
                    await fetch(`${import.meta.env.VITE_API_URL}/data/expense`, {
                      method: "POST",
                      body: JSON.stringify(formData),
                      headers: {
                          "Content-Type": "application/json",
                        }
                    });
                    setFormData({
                        date: "", totalexpense: "", housing: "", food: "", transportation: "", insurance: "", other: ""
                 });
              } catch (err) {
                  console.log("An Error has ocurred", err);
                  alert("There was a problem adding this data. Please try again later");
              }
            }

    return (
        <div>
                <p>Add Expense</p>
                <form className="box">
                <div className="field">
                <label className="label" for="birthday">Date:</label>
                <div className="control">
                <input className="input" type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                </div>
                </div>
                <div className="field">
                <label className="label" for="totalexpense">Total Expense:</label><br />
                <div className="control">
                <input className="input" type="text" id="totalexpensee" name="totalexpense" value={formData.totalexpense} onChange={handleChange}/><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="housing">Housing:</label><br />
                <div className="control">
                <input className="input" type="text" id="housing" name="housing" value={formData.housing} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="food">Food:</label><br />
                <div className="control">
                <input className="input" type="text" id="food" name="food" value={formData.food} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <div className="control">
                <label className="label" for="transportation">Transportation:</label><br />
                <input className="input" type="text" id="transportation" name="transportation" value={formData.transportation} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="insurance">Insurance:</label><br />
                <div className="control">
                <input className="input" type="text" id="insurance" name="insurance" value={formData.insurance} onChange={handleChange}></input><br />
                </div>
                </div>
                <div className="field">
                <label className="label" for="other">Other:</label><br />
                <div className="control">
                <input className="input" type="text" id="other" name="other" value={formData.other} onChange={handleChange}></input><br />
                </div>
                </div>
                <input className="button is-primary" type="submit" onClick={handleClick}/>
                </form>
        </div>
    )
}

export default DeductIncome;