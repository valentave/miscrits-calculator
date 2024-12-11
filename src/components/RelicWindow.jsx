/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/RelicWindow.css"

export default function RelicWindow({newRelics, setNewRelics, setRelicWindow, relics}) {
    const [relicFilter, setFilterRelic] = useState("")
    let [filteredList, setFilteredList] = useState({...relics})
    function handleRelic(id, level) {
        const copy = [...newRelics];
        if (level <= 10) {
            copy[0] = id;
        } else if (level <= 20) {
            copy[1] = id;
        } else if (level <= 30) {
            copy[2] = id;
        } else {
            copy[3] = id;
        }
        setNewRelics(copy)
        setRelicWindow(false)
    }
    function manageFilter(stat) {
        // eslint-disable-next-line no-unused-vars
        let newList = Object.entries(relics).filter(([id, item]) => item.Keys[stat] && (item.Keys[stat] > 0)).map(([id, item]) => ({ id, ...item }))
        setFilteredList({...newList})
        setFilterRelic(stat)
    }
    return (
        <div className="window-back">
            <div className="help-window">
                <button className="close-help-button" onClick={() => setRelicWindow(false)}>X</button>
                <div className="relic-filter-container">
                    <p>Filter:</p>
                    <button className={relicFilter == "hp" ? "selected" : "not-selected"} onClick={() => manageFilter("hp")}>HP</button>
                    <button className={relicFilter == "spd" ? "selected" : "not-selected"} onClick={() => manageFilter("spd")}>SPD</button>
                    <button className={relicFilter == "ea" ? "selected" : "not-selected"} onClick={() => manageFilter("ea")}>EA</button>
                    <button className={relicFilter == "ed" ? "selected" : "not-selected"} onClick={() => manageFilter("ed")}>ED</button>
                    <button className={relicFilter == "pa" ? "selected" : "not-selected"} onClick={() => manageFilter("pa")}>PA</button>
                    <button className={relicFilter == "pd" ? "selected" : "not-selected"} onClick={() => manageFilter("pd")}>PD</button>
                </div>
                <div className="relic-window__relics-container">
                    {Object.entries(filteredList).map(([id,item]) => (
                        <button key={id} onClick={()=> handleRelic(item.id, item.Level)}>
                            <h4>{item.Name}</h4>
                            {Object.entries(item.Keys).map(([stat,value]) => (
                                <li key={id+stat+value}>{stat.toUpperCase()}: {value}</li>
                            ))}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}