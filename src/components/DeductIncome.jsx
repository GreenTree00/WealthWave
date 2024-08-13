import React from "react";

function DeductIncome () {
    return (
        <div className="addExpense">
            <p>Add Expense</p>
            <form>
                <label for="month">Which Month of Expense:</label>
                <select id="month" name="month">
                <option value="January">January</option>
                <option value="Febuary">Febuary</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
                </select>
                <label for="year">Year:</label>
                <select id="year" name="year">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                </select>
                <br />
                <label for="totalExpense">Total Expense:</label><br />
                <input type="text" id="totalExpense" name="totalExpense" /><br />
                <label for="housing">Housing:</label><br />
                <input type="text" id="housing" name="housing"></input><br />
                <label for="food">Food:</label><br />
                <input type="text" id="food" name="food"></input><br />
                <label for="transportation">Transportation:</label><br />
                <input type="text" id="transportation" name="transportation"></input><br />
                <label for="insurance">Insurance:</label><br />
                <input type="text" id="insurance" name="insurance"></input><br />
                <label for="other">Other:</label><br />
                <input type="text" id="other" name="other"></input><br />
                <br />
                <input type="submit" />
                </form>
        </div>
    )
}

export default DeductIncome;