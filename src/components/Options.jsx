/* eslint-disable react/prop-types */
import "../styles/Options.css"

export default function Options({setPlatinum,setBonus, rebonus, changeNature}) {

    return (
        <div className="options-container">
            <h2>OPTIONS</h2>
            <button onClick={() => setPlatinum([],"x")} className="btn-options-1">ADD/REMOVE<br/>PLATINUM</button>
            <button onClick={() => rebonus()} className="btn-options-2">REBONUS</button>
            <button onClick={() => changeNature()} className="btn-options-3">CHANGE ALL<br/>TO WHITE,<br/>GREEN OR RED</button>
            <button onClick={() => setBonus([],"x")} className="btn-options-4">ADD/REMOVE<br/>BONUS</button>
        </div>
    )
}