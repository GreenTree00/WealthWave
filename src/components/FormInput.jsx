export default function FormInput ({For, Type, ID, Name, Value, OnChange, children}) {
return (
    <div className="field">
    <label className="label" for={For}>{children}</label><br />
    <div className="control">
    <input className="input" type={Type} id={ID} name={Name} value={Value} onChange={OnChange}/><br />
    </div>
    </div>
)
}