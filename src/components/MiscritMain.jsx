/* eslint-disable react/prop-types */
import "../styles/MiscritMain.css"

export default function MiscritMain({miscrit, areBonusOn, arePlatinumOn, setHelpActive}) {
    return (
        <div className="miscrit-main">
            <p className="bonus-check">Bonus: {areBonusOn ? "On" : "Off"}</p>
            <p className="platinum-check">Plat: {arePlatinumOn ? "On" : "Off"}</p>
            <button className="help-button" onClick={() => setHelpActive(true)}>?</button>
            <div className="main__image-container">
                <img src={"./assets/full-pics/" + miscrit.id + ".webp"} alt="" />
            </div>
        </div>
    )
}