/* eslint-disable react/prop-types */
import "../styles/Stats.css"

export default function Stats({relicBonus, miscrit, areBonusOn, bonus, arePlatinumOn, platinum, nature, setNature, setEditActive, level, setLevel}) {
    
    function calcStat(level,stat,nature) {
        let baseStat = 0
        let platinumStat = 0
        let bonusStat = 0
        let relicStat = 0
        if (stat == "hp") {
            baseStat = ((12 + 2 * miscrit.hp + 1.5 * (nature == "red" ? 1 : nature == "white" ? 2 : 3)) / 5) * level + 10
        } else {
            baseStat = ((3 + 2 * miscrit[stat] + 1.5 * (nature == "red" ? 1 : nature == "white" ? 2 : 3)) / 6) * level + 5
        }
        platinumStat = (arePlatinumOn ? platinum[stat] : 0)
        bonusStat = (areBonusOn ? bonus[stat] : 0)
        relicStat = relicBonus[stat]
        return Math.floor(baseStat + platinumStat + bonusStat + relicStat)
    }
    
    return(
        <div className="stats-container">
            <p className="level-button" >Level {level}</p>
            <input className="level-slider" type="range" min="1" max="35" defaultValue={level} onChange={(x) => (setLevel(x.target.value))}></input>
            <button className="edit-button" onClick={() => setEditActive(true)}>Edit bonus</button>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})}><img src="./assets/other/hp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})} className={"stat stat-"+nature.hp}>{calcStat(level,"hp",nature.hp)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.hp) + (arePlatinumOn && platinum.hp)}</p>
                    <p>Relics: {relicBonus.hp}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.hp > index ? "base-stat-colored base-stat-green" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, spd: (nature.spd == "green" ? "red" : nature.spd == "red" ? "white" : "green")})}><img src="./assets/other/sp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, spd: (nature.spd == "green" ? "red" : nature.spd == "red" ? "white" : "green")})} className={"stat stat-"+nature.spd}>{calcStat(level,"spd",nature.spd)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.spd) + (arePlatinumOn && platinum.spd)}</p>
                    <p>Relics: {relicBonus.spd}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.spd > index ? "base-stat-colored base-stat-yellow" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})}><img src="./assets/other/ea.png" alt="" /></button>
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})} className={"stat stat-"+nature.ea}>{calcStat(level,"ea",nature.ea)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.ea) + (arePlatinumOn && platinum.ea)}</p>
                    <p>Relics: {relicBonus.ea}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.ea > index ? "base-stat-colored base-stat-red" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, pa: (nature.pa == "green" ? "red" : nature.pa == "red" ? "white" : "green")})}><img src="./assets/other/pa.png" alt="" /></button>
                <button onClick={() => setNature({...nature, pa: (nature.pa == "green" ? "red" : nature.pa == "red" ? "white" : "green")})} className={"stat stat-"+nature.pa}>{calcStat(level,"pa",nature.pa)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.pa) + (arePlatinumOn && platinum.pa)}</p>
                    <p>Relics: {relicBonus.pa}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.pa > index ? "base-stat-colored base-stat-blue" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, ed: (nature.ed == "green" ? "red" : nature.ed == "red" ? "white" : "green")})}><img src="./assets/other/ed.png" alt="" /></button>
                <button onClick={() => setNature({...nature, ed: (nature.ed == "green" ? "red" : nature.ed == "red" ? "white" : "green")})} className={"stat stat-"+nature.ed}>{calcStat(level,"ed",nature.ed)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.ed) + (arePlatinumOn && platinum.ed)}</p>
                    <p>Relics: {relicBonus.ed}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.ed > index ? "base-stat-colored base-stat-red" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, pd: (nature.pd == "green" ? "red" : nature.pd == "red" ? "white" : "green")})}><img src="./assets/other/pd.png" alt="" /></button>
                <button onClick={() => setNature({...nature, pd: (nature.pd == "green" ? "red" : nature.pd == "red" ? "white" : "green")})} className={"stat stat-"+nature.pd}>{calcStat(level,"pd",nature.pd)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.pd) + (arePlatinumOn && platinum.pd)}</p>
                    <p>Relics: {relicBonus.pd}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.pd > index ? "base-stat-colored base-stat-blue" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}