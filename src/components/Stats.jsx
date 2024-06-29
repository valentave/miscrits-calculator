/* eslint-disable react/prop-types */
import "../styles/Stats.css"

export default function Stats({miscrit, areBonusOn, bonus, arePlatinumOn, platinum, nature, setNature}) {
    return(
        <div className="stats-container">
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})}><img src="./assets/other/hp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})} className={"stat stat-"+nature.hp}>{miscrit.hp * 12 + (nature.hp == "green" ? 109 : nature.hp == "white" ? 100 : 91) + (arePlatinumOn && platinum.hp) + (areBonusOn && bonus.hp)}</button>
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
                <button onClick={() => setNature({...nature, sp: (nature.sp == "green" ? "red" : nature.sp == "red" ? "white" : "green")})} className={"stat stat-"+nature.sp}>{miscrit.sp * 10 + (nature.sp == "green" ? 42 : nature.sp == "white" ? 35 : 27) + (arePlatinumOn && platinum.sp) + (areBonusOn && bonus.sp)}</button>
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
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})} className={"stat stat-"+nature.ea}>{miscrit.ea * 10 + (nature.ea == "green" ? 42 : nature.ea == "white" ? 35 : 27) + (arePlatinumOn && platinum.ea) + (areBonusOn && bonus.ea)}</button>
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
                <button onClick={() => setNature({...nature, pa: (nature.pa == "green" ? "red" : nature.pa == "red" ? "white" : "green")})} className={"stat stat-"+nature.pa}>{miscrit.pa * 10 + (nature.pa == "green" ? 42 : nature.pa == "white" ? 35 : 27) + (arePlatinumOn && platinum.pa) + (areBonusOn && bonus.pa)}</button>
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
                <button onClick={() => setNature({...nature, ed: (nature.ed == "green" ? "red" : nature.ed == "red" ? "white" : "green")})} className={"stat stat-"+nature.ed}>{miscrit.ed * 10 + (nature.ed == "green" ? 42 : nature.ed == "white" ? 35 : 27) + (arePlatinumOn && platinum.ed) + (areBonusOn && bonus.ed)}</button>
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
                <button onClick={() => setNature({...nature, pd: (nature.pd == "green" ? "red" : nature.pd == "red" ? "white" : "green")})} className={"stat stat-"+nature.pd}>{miscrit.pd * 10 + (nature.pd == "green" ? 42 : nature.pd == "white" ? 35 : 27) + (arePlatinumOn && platinum.pd) + (areBonusOn && bonus.pd)}</button>
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