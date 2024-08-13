import React from "react";

function DeductIncome () {
    return (
        <div>
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
                <label for="jobIncome">Expense:</label><br />
                <input type="text" id="jobIncome" name="jobIncome" /><br />
                <label for="sideHustleIncome">Side Hustle Income:</label><br />
                <input type="text" id="sideHustleIncome" name="sideHustleIncome"></input><br />
                <label for="stockIncome">Stock Income:</label><br />
                <input type="text" id="stockIncome" name="stockIncome"></input>
                <br />
                <input type="submit" />
                </form>
        </div>
    )
}

export default DeductIncome;