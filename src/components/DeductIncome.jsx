import React, {useState} from "react";

function DeductIncome () {

        const [formData, setFormData] = useState({
           date: "", totalexpense: "", housing: "", food: "", transportation: "", insurance: "", other: ""
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
                console.log(formData);
            }

    return (
        <div className="addExpense">
                <p>Add Expense</p>
                <form>
                <label for="birthday">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                <br />
                <label for="totalexpense">Total Expense:</label><br />
                <input type="text" id="totalexpensee" name="totalexpense" value={formData.totalexpense} onChange={handleChange}/><br />
                <label for="housing">Housing:</label><br />
                <input type="text" id="housing" name="housing" value={formData.housing} onChange={handleChange}></input><br />
                <label for="food">Food:</label><br />
                <input type="text" id="food" name="food" value={formData.food} onChange={handleChange}></input><br />
                <label for="transportation">Transportation:</label><br />
                <input type="text" id="transportation" name="transportation" value={formData.transportation} onChange={handleChange}></input><br />
                <label for="insurance">Insurance:</label><br />
                <input type="text" id="insurance" name="insurance" value={formData.insurance} onChange={handleChange}></input><br />
                <label for="other">Other:</label><br />
                <input type="text" id="other" name="other" value={formData.other} onChange={handleChange}></input><br />
                <br />
                <input type="submit" onClick={handleClick}/>
                </form>
        </div>
    )
}

export default DeductIncome;