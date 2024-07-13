/* eslint-disable react/prop-types */
import "../styles/MiscritMain.css"

export default function MiscritMain({miscrit, areBonusOn, arePlatinumOn}) {
    return (
        <div className="miscrit-main">
            <p className="bonus-check">Bonus: {areBonusOn ? "On" : "Off"}</p>
            <p className="platinum-check">Plat: {arePlatinumOn ? "On" : "Off"}</p>
            <div className="main__image-container">
                <img className={"picture-available-" + miscrit.available} src={miscrit.name.includes("?") ? "./assets/full-pics/missing.webp" : ("./assets/full-pics/" + miscrit.id + ".webp")} alt="" />
            </div>
        </div>
    )
}