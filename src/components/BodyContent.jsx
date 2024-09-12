import BarGraphDateFilter from "./BarGraphDateFilter";
import PieGraph from "./PieGraph";
import AddIncome from "./AddIncome";
import DeductIncome from "./DeductIncome";


export default function BodyContent ({page}) {

    
    return (
        <>
        {page === "home" && <PieGraph className="cell" />}
        {page === "bar" && <BarGraphDateFilter className="cell" />}
        {page === "income" && <AddIncome className="cell" />}
        {page === "expense" && <DeductIncome className="cell" />}
        </>
    )
}
