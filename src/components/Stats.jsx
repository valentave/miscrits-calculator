/* eslint-disable react/prop-types */
import "../styles/Stats.css"

export default function Stats({miscrit, areBonusOn, bonus, arePlatinumOn, platinum, nature, setNature, setEditActive}) {
    let HP_STATS_GREEN = [139,153,167,181,195]
    let OTHER_STATS_GREEN = [60,72,83,95,107]
    let HP_STATS_WHITE = [129,143,157,171,185]
    let OTHER_STATS_WHITE = [51,63,75,87,99]
    let HP_STATS_RED = [119,133,147,161,175]
    let OTHER_STATS_RED = [42,54,66,77,89]
    
    return(
        <div className="stats-container">
            <button className="edit-button" onClick={() => setEditActive(true)}>Edit bonus</button>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})}><img src="./assets/other/hp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})} className={"stat stat-"+nature.hp}>{(nature.hp == "green" ? HP_STATS_GREEN[miscrit.hp - 1] : nature.hp == "white" ? HP_STATS_WHITE[miscrit.hp - 1] : HP_STATS_RED[miscrit.hp - 1]) + (arePlatinumOn && platinum.hp) + (areBonusOn && bonus.hp)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.hp) + (arePlatinumOn && platinum.hp)}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.hp > index ? "base-stat-colored base-stat-green" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, sp: (nature.sp == "green" ? "red" : nature.sp == "red" ? "white" : "green")})}><img src="./assets/other/sp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, sp: (nature.sp == "green" ? "red" : nature.sp == "red" ? "white" : "green")})} className={"stat stat-"+nature.sp}>{(nature.sp == "green" ? OTHER_STATS_GREEN[miscrit.sp - 1] : nature.sp == "white" ? OTHER_STATS_WHITE[miscrit.sp - 1] : OTHER_STATS_RED[miscrit.sp - 1]) + (arePlatinumOn && platinum.sp) + (areBonusOn && bonus.sp)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.sp) + (arePlatinumOn && platinum.sp)}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.sp > index ? "base-stat-colored base-stat-yellow" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})}><img src="./assets/other/ea.png" alt="" /></button>
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})} className={"stat stat-"+nature.ea}>{(nature.ea == "green" ? OTHER_STATS_GREEN[miscrit.ea - 1] : nature.ea == "white" ? OTHER_STATS_WHITE[miscrit.ea - 1] : OTHER_STATS_RED[miscrit.ea- 1]) + (arePlatinumOn && platinum.ea) + (areBonusOn && bonus.ea)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.ea) + (arePlatinumOn && platinum.ea)}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.ea > index ? "base-stat-colored base-stat-red" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, pa: (nature.pa == "green" ? "red" : nature.pa == "red" ? "white" : "green")})}><img src="./assets/other/pa.png" alt="" /></button>
                <button onClick={() => setNature({...nature, pa: (nature.pa == "green" ? "red" : nature.pa == "red" ? "white" : "green")})} className={"stat stat-"+nature.pa}>{(nature.pa == "green" ? OTHER_STATS_GREEN[miscrit.pa - 1] : nature.pa == "white" ? OTHER_STATS_WHITE[miscrit.pa - 1] : OTHER_STATS_RED[miscrit.pa - 1]) + (arePlatinumOn && platinum.pa) + (areBonusOn && bonus.pa)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.pa) + (arePlatinumOn && platinum.pa)}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.pa > index ? "base-stat-colored base-stat-blue" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, ed: (nature.ed == "green" ? "red" : nature.ed == "red" ? "white" : "green")})}><img src="./assets/other/ed.png" alt="" /></button>
                <button onClick={() => setNature({...nature, ed: (nature.ed == "green" ? "red" : nature.ed == "red" ? "white" : "green")})} className={"stat stat-"+nature.ed}>{(nature.ed == "green" ? OTHER_STATS_GREEN[miscrit.ed - 1] : nature.ed == "white" ? OTHER_STATS_WHITE[miscrit.ed - 1] : OTHER_STATS_RED[miscrit.ed - 1]) + (arePlatinumOn && platinum.ed) + (areBonusOn && bonus.ed)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.ed) + (arePlatinumOn && platinum.ed)}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.ed > index ? "base-stat-colored base-stat-red" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, pd: (nature.pd == "green" ? "red" : nature.pd == "red" ? "white" : "green")})}><img src="./assets/other/pd.png" alt="" /></button>
                <button onClick={() => setNature({...nature, pd: (nature.pd == "green" ? "red" : nature.pd == "red" ? "white" : "green")})} className={"stat stat-"+nature.pd}>{(nature.pd == "green" ? OTHER_STATS_GREEN[miscrit.pd - 1] : nature.pd == "white" ? OTHER_STATS_WHITE[miscrit.pd - 1] : OTHER_STATS_RED[miscrit.pd - 1]) + (arePlatinumOn && platinum.pd) + (areBonusOn && bonus.pd)}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.pd) + (arePlatinumOn && platinum.pd)}</p>
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