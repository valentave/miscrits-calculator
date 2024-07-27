/* eslint-disable react/prop-types */
import { useState } from "react"
import "../styles/EditBonusWindow.css"

export default function EditBonuswindow({setEditActive, bonus, platinum, changePlatinum, changeBonus}) {
    const [alertActive, setAlertActive] = useState(false)
    const [newBonus, setNewBonus] = useState({
        hp: bonus.hp,
        sp: bonus.sp,
        ea: bonus.ea,
        pa: bonus.pa,
        ed: bonus.ed,
        pd: bonus.pd
    })
    const [newPlatinum, setNewPlatinum] = useState({
        hp: platinum.hp,
        sp: platinum.sp,
        ea: platinum.ea,
        pa: platinum.pa,
        ed: platinum.ed,
        pd: platinum.pd
    })
    const [totalBonus, setTotalBonus] = useState(bonus.hp + bonus.sp + bonus.ea + bonus.pa + bonus.ed + bonus.pd) 
    const [totalPlatinum, setTotalPlatinum] = useState(platinum.hp + platinum.sp + platinum.ea + platinum.pa + platinum.ed + platinum.pd)
    
    function handleBonus(input, stat, amount) {
        let copyBonus = {...newBonus}
        copyBonus[stat] = amount
        let sum = copyBonus.hp + copyBonus.sp + copyBonus.ea + copyBonus.pa + copyBonus.ed + copyBonus.pd 
        if (sum <= 87 && sum >= 0) {
            setTotalBonus(sum)
            setNewBonus({...copyBonus})
        } else {
            input.target.value = newBonus[stat]
        }
    }
    function handlePlatinum(input, stat, amount) {
        let copyBonus = {...newPlatinum}
        copyBonus[stat] = amount
        let sum = copyBonus.hp + copyBonus.sp + copyBonus.ea + copyBonus.pa + copyBonus.ed + copyBonus.pd 
        if (sum <= 29 && sum >= 0) {
            setTotalPlatinum(sum)
            setNewPlatinum({...copyBonus})
        } else {
            input.target.value = newPlatinum[stat]
        }
    }

    function confirmChanges() {
        if(totalBonus == 87 || totalBonus == 0) {
            changePlatinum([newPlatinum.hp, newPlatinum.sp, newPlatinum.ea, newPlatinum.pa, newPlatinum.ed, newPlatinum.pd])
            changeBonus([newBonus.hp, newBonus.sp, newBonus.ea, newBonus.pa, newBonus.ed, newBonus.pd])
            setEditActive(false)
        } else {
            setAlertActive(true)
        }
    }

    return(
        <div className="window-back">
            {alertActive && (
                <div className="window-back">
                    <div className="help-window alert-window">
                        <button className="close-help-button" onClick={() => setAlertActive(false)}>X</button>
                        <h2>Warning!</h2>
                        <h4>You can&apos;t set less than 87 points in level bonuses.</h4>
                    </div>
                </div>
            )}
            <div className="help-window edit-window">
            <button className="close-help-button" onClick={() => setEditActive(false)}>X</button>
                <h2>Edit Level Bonuses</h2>
                <table className="edit-bonus-table">
                    <thead>
                        <tr>
                            <th className="green-text">HP</th>
                            <th className="yellow-text">SP</th>
                            <th className="red-text">EA</th>
                            <th className="blue-text">PA</th>
                            <th className="red-text">ED</th>
                            <th className="blue-text">PD</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-bonus-hp" id="input-bonus-hp" defaultValue={bonus.hp} onChange={(input) => handleBonus(input, "hp", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-bonus-sp" id="input-bonus-sp" defaultValue={bonus.sp} onChange={(input) => handleBonus(input, "sp", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-bonus-ea" id="input-bonus-ea" defaultValue={bonus.ea} onChange={(input) => handleBonus(input, "ea", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-bonus-pa" id="input-bonus-pa" defaultValue={bonus.pa} onChange={(input) => handleBonus(input, "pa", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-bonus-ed" id="input-bonus-ed" defaultValue={bonus.ed} onChange={(input) => handleBonus(input, "ed", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-bonus-pd" id="input-bonus-pd" defaultValue={bonus.pd} onChange={(input) => handleBonus(input, "pd", parseInt(input.target.value))}/></td>
                            <td>{totalBonus}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Edit Platinum Bonuses</h2>
                <table className="edit-bonus-table">
                    <thead>
                        <tr>
                            <th className="green-text">HP</th>
                            <th className="yellow-text">SP</th>
                            <th className="red-text">EA</th>
                            <th className="blue-text">PA</th>
                            <th className="red-text">ED</th>
                            <th className="blue-text">PD</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-platinum-hp" id="input-platinum-hp" defaultValue={platinum.hp} onChange={(input) => handlePlatinum(input, "hp", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-platinum-sp" id="input-platinum-sp" defaultValue={platinum.sp} onChange={(input) => handlePlatinum(input, "sp", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-platinum-ea" id="input-platinum-ea" defaultValue={platinum.ea} onChange={(input) => handlePlatinum(input, "ea", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-platinum-pa" id="input-platinum-pa" defaultValue={platinum.pa} onChange={(input) => handlePlatinum(input, "pa", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-platinum-ed" id="input-platinum-ed" defaultValue={platinum.ed} onChange={(input) => handlePlatinum(input, "ed", parseInt(input.target.value))}/></td>
                            <td><input min={0} max={29} className="input-bonus" type="number" name="input-platinum-pd" id="input-platinum-pd" defaultValue={platinum.pd} onChange={(input) => handlePlatinum(input, "pd", parseInt(input.target.value))}/></td>
                            <td>{totalPlatinum}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="confirm-edit-button" onClick={() => confirmChanges()}>CONFIRM</button>
            </div>
        </div>
    )
}