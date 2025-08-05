/* eslint-disable react/prop-types */
import "../styles/MiscritMain.css"
import RELICS from "../data/relics.json"
import { useState } from "react"
import RelicWindow from "./RelicWindow"
import { useEffect } from "react"

export default function MiscritMain({miscrit, areBonusOn, arePlatinumOn, setRelicBonus}) {
    const [relicWindow, setRelicWindow] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState(0)
    const [newRelics, setNewRelics] = useState([0,0,0,0])
    function handleSlot(slot) {
        setSelectedSlot(slot)
        setRelicWindow(true)
    }

    function sumObjects(obj1 = {}, obj2 = {}) {
        const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
        return Array.from(allKeys).reduce((acc, key) => {
            acc[key] = (obj1[key] || 0) + (obj2[key] || 0);
            return acc;
        }, {});
    }
    useEffect(() => {
        let newBonus = {
            "hp": 0,
            "spd": 0,
            "ea": 0,
            "ed": 0,
            "pa": 0,
            "pd": 0
          }
        newRelics.forEach(x => {
            const currentBonus = RELICS[x]?.Keys
            newBonus = sumObjects(newBonus, currentBonus)
        });
        setRelicBonus(newBonus)
    },[newRelics])
    return (
        <div className="miscrit-main">
            {relicWindow && 
                // eslint-disable-next-line no-unused-vars
                <RelicWindow newRelics={newRelics} setNewRelics={setNewRelics} setRelicWindow={setRelicWindow} relics={Object.entries(RELICS).filter(([id, item]) => item.Level <= (selectedSlot == 1 ? 10 : selectedSlot == 2 ? 20 : selectedSlot == 3 ? 30 : 35) & item.Level >= (selectedSlot == 1 ? 5 : selectedSlot == 2 ? 15 : selectedSlot == 3 ? 25 : 35)).map(([id, item]) => ({ id, ...item }))}/>}
            { <div className="relics-container">
                <button className="relic-button" onClick={() => handleSlot(1)}>
                    <img className="relic-image" src={`./assets/relics/${newRelics[0]}.webp`} alt="" />
                    <img src="./assets/other/relic_slot.png" alt="" />
                </button>
                <button className="relic-button" onClick={() => handleSlot(2)}>
                    <img className="relic-image" src={`./assets/relics/${newRelics[1]}.webp`} alt="" />
                    <img src="./assets/other/relic_slot.png" alt="" />
                </button>
                <button className="relic-button" onClick={() => handleSlot(3)}>
                    <img className="relic-image" src={`./assets/relics/${newRelics[2]}.webp`} alt="" />
                    <img src="./assets/other/relic_slot.png" alt="" />
                </button>
                <button className="relic-button" onClick={() => handleSlot(4)}>
                    <img className="relic-image" src={`./assets/relics/${newRelics[3]}.webp`} alt="" />
                    <img src="./assets/other/relic_slot.png" alt="" />
                </button>
            </div> }
            <p className="bonus-check">Bonus: {areBonusOn ? "On" : "Off"}</p>
            <p className="platinum-check">Plat: {arePlatinumOn ? "On" : "Off"}</p>
            <div className="main__image-container">
                <img className={"picture-available-" + (miscrit.available === true ? true : false)} src={miscrit.name.includes("?") ? "./assets/full-pics/missing.webp" : ("https://cdn.worldofmiscrits.com/miscrits/" +  miscrit.evoName.replaceAll(" ", "_").toLowerCase() + "_back.png")} alt="" />
            </div>
        </div>
    )
}