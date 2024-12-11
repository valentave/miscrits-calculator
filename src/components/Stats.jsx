/* eslint-disable react/prop-types */
import "../styles/Stats.css"

export default function Stats({relicBonus, miscrit, areBonusOn, bonus, arePlatinumOn, platinum, nature, setNature, setEditActive, level, setLevel}) {
    let HP_STATS_GREEN = [
        [13,14,14,14,15],
        [17,18,18,19,20],
        [21,22,23,24,25],
        [24,26,28,29,31],
        [28,30,32,34,36],
        [32,34,36,39,41],
        [35,38,41,44,47],
        [39,42,45,49,52],
        [43,47,50,54,57],
        [47,51,55,59,63],
        [50,54,59,63,68],
        [54,58,63,68,73],
        [58,63,68,73,78],
        [61,66,72,78,84],
        [65,71,77,83,89],
        [69,75,82,88,94],
        [72,79,86,93,100],
        [76,83,91,98,105],
        [80,88,96,103,110],
        [84,92,100,108,116],
        [87,96,104,112,121],
        [91,100,109,117,126],
        [95,104,113,122,131],
        [99,109,118,127,137],
        [102,112,122,132,142],
        [105,116,127,137,147],
        [109,120,131,142,153],
        [113,125,136,147,158],
        [117,129,140,152,163],
        [121,133,145,157,169],
        [124,137,149,161,174],
        [128,141,154,166,179],
        [132,145,158,171,184],
        [135,149,163,176,190],
        [139,153,167,181,195]
    ]
    let OTHER_STATS_GREEN = [
        [6,6,7,7,7],
        [8,8,9,10,10],
        [9,10,11,12,13],
        [11,12,14,15,16],
        [12,14,16,17,19],
        [14,16,18,20,22],
        [16,18,20,23,23],
        [17,20,23,25,28],
        [19,22,25,28,31],
        [20,24,27,30,34],
        [22,26,29,33,37],
        [24,28,32,36,40],
        [25,29,34,38,42],
        [27,31,36,41,45],
        [28,33,38,43,48],
        [30,35,41,46,51],
        [31,37,43,48,54],
        [33,39,45,51,57],
        [35,41,47,54,60],
        [36,43,50,56,63],
        [38,45,52,59,66],
        [39,47,54,61,69],
        [41,49,57,64,72],
        [43,51,59,67,75],
        [44,52,61,69,77],
        [46,54,63,72,80],
        [47,56,65,74,83],
        [49,58,68,77,86],
        [50,60,70,79,89],
        [52,62,72,82,92],
        [54,64,74,85,95],
        [55,66,77,87,98],
        [57,68,79,90,101],
        [58,70,81,92,104],
        [60,72,83,95,107]
    ]
    let HP_STATS_WHITE = [
        [13,13,14,14,15],
        [17,17,18,19,20],
        [20,21,22,23,25],
        [24,25,27,28,30],
        [27,29,31,33,35],
        [30,32,35,37,40],
        [33,36,39,42,45],
        [36,40,43,46,50],
        [40,44,47,51,55],
        [44,48,52,56,60],
        [47,51,55,60,65],
        [50,55,60,65,70],
        [53,59,64,69,75],
        [57,63,68,74,80],
        [61,67,73,79,85],
        [64,70,77,83,90],
        [67,74,81,88,95],
        [71,78,85,92,100],
        [75,82,90,97,105],
        [78,86,94,102,110],
        [81,89,98,106,115],
        [84,93,102,111,120],
        [88,97,106,115,125],
        [91,101,110,120,130],
        [95,105,115,125,135],
        [98,108,119,130,140],
        [101,112,123,134,145],
        [105,116,127,139,150],
        [108,120,131,143,155],
        [112,124,136,148,160],
        [115,127,140,152,165],
        [118,131,144,157,170],
        [121,135,148,161,175],
        [125,139,152,166,180],
        [129,143,157,171,185]
    ]
    let OTHER_STATS_WHITE = [
        [6,6,7,7,7],
        [7,7,8,9,10],
        [9,10,11,12,13],
        [10,11,13,14,15],
        [11,13,15,16,18],
        [13,15,17,19,21],
        [14,16,19,21,23],
        [15,18,21,23,26],
        [17,20,23,26,29],
        [18,21,25,28,31],
        [19,23,27,30,34],
        [21,25,29,33,37],
        [22,26,31,35,39],
        [23,28,33,37,42],
        [25,30,35,40,45],
        [26,31,37,42,47],
        [27,33,39,44,50],
        [29,35,41,47,53],
        [30,36,43,49,55],
        [31,38,45,51,58],
        [33,40,47,54,61],
        [34,41,49,56,63],
        [35,43,51,58,66],
        [37,45,53,61,69],
        [38,46,55,63,72],
        [39,48,57,65,73],
        [41,50,59,68,77],
        [42,51,61,70,79],
        [43,53,63,72,82],
        [45,55,65,75,85],
        [46,56,67,77,87],
        [47,58,69,79,90],
        [49,60,71,82,93],
        [50,61,73,84,95],
        [51,63,75,87,99]
    ]
    let HP_STATS_RED = [
        [13,13,13,14,14],
        [16,16,17,18,19],
        [19,20,21,22,24],
        [22,24,25,27,28],
        [25,27,29,31,33],
        [28,30,33,35,38],
        [31,34,37,40,42],
        [34,38,41,44,47],
        [37,41,45,48,52],
        [41,46,51,54,57],
        [44,49,53,57,61],
        [47,52,56,61,66],
        [50,55,60,65,71],
        [53,58,64,70,75],
        [56,61,68,74,80],
        [59,65,72,78,85],
        [62,69,76,83,89],
        [65,73,80,87,94],
        [68,76,84,91,99],
        [72,80,88,96,104],
        [75,83,91,100,108],
        [78,87,95,104,113],
        [81,90,99,108,118],
        [83,94,103,113,122],
        [87,97,107,117,127],
        [90,101,111,122,132],
        [93,104,115,126,136],
        [97,108,119,130,141],
        [100,111,123,134,146],
        [103,115,127,139,151],
        [106,118,130,143,155],
        [109,121,134,147,160],
        [112,125,138,151,165],
        [115,129,143,156,169],
        [119,133,147,160,174]
    ]
    let OTHER_STATS_RED = [
        [6,6,7,7,7],
        [7,7,8,9,9],
        [8,9,10,11,12],
        [9,10,12,13,14],
        [10,12,13,15,17],
        [11,13,15,17,19],
        [12,14,17,19,21],
        [13,16,19,21,24],
        [14,17,20,23,26],
        [15,19,22,25,29],
        [16,20,24,27,31],
        [18,22,26,30,34],
        [19,23,27,32,36],
        [20,24,29,34,38],
        [21,26,31,36,41],
        [22,27,33,38,43],
        [23,29,34,40,46],
        [24,30,36,42,48],
        [25,31,38,44,50],
        [26,33,40,46,53],
        [27,34,41,48,55],
        [28,36,43,50,58],
        [29,37,45,52,60],
        [31,39,47,55,63],
        [32,40,48,57,65],
        [33,41,50,59,67],
        [34,43,52,61,70],
        [35,44,54,63,72],
        [36,46,55,65,75],
        [37,47,57,67,77],
        [38,48,59,69,79],
        [39,50,61,71,82],
        [40,51,62,73,84],
        [41,53,64,75,87],
        [42,54,66,77,89]
    ]
    
    return(
        <div className="stats-container">
            <p className="level-button" >Level {level}</p>
            <input className="level-slider" type="range" min="1" max="35" defaultValue={level} onChange={(x) => (setLevel(x.target.value))}></input>
            <button className="edit-button" onClick={() => setEditActive(true)}>Edit bonus</button>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})}><img src="./assets/other/hp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, hp: (nature.hp == "green" ? "red" : nature.hp == "red" ? "white" : "green")})} className={"stat stat-"+nature.hp}>{(nature.hp == "green" ? HP_STATS_GREEN[level-1][miscrit.hp - 1] : nature.hp == "white" ? HP_STATS_WHITE[level-1][miscrit.hp - 1] : HP_STATS_RED[level-1][miscrit.hp - 1]) + (arePlatinumOn && platinum.hp) + (areBonusOn && bonus.hp) + relicBonus.hp}</button>
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
                <button onClick={() => setNature({...nature, sp: (nature.sp == "green" ? "red" : nature.sp == "red" ? "white" : "green")})}><img src="./assets/other/sp.png" alt="" /></button>
                <button onClick={() => setNature({...nature, sp: (nature.sp == "green" ? "red" : nature.sp == "red" ? "white" : "green")})} className={"stat stat-"+nature.sp}>{(nature.sp == "green" ? OTHER_STATS_GREEN[level-1][miscrit.sp - 1] : nature.sp == "white" ? OTHER_STATS_WHITE[level-1][miscrit.sp - 1] : OTHER_STATS_RED[level-1][miscrit.sp - 1]) + (arePlatinumOn && platinum.sp) + (areBonusOn && bonus.sp) + relicBonus.spd}</button>
                <div className="bonus-popup">
                    <p>Bonus: {0 + (areBonusOn && bonus.sp) + (arePlatinumOn && platinum.sp)}</p>
                    <p>Relics: {relicBonus.spd}</p>
                </div>
                <div className="base-stats-popup">
                    {[0,0,0,0,0].map((value,index) => (
                        <div key={"base-stat-"+index} className={miscrit.sp > index ? "base-stat-colored base-stat-yellow" : "base-stat-empty"}></div>
                    ))}
                </div>
            </div>
            <div className="stat-buttons-container">
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})}><img src="./assets/other/ea.png" alt="" /></button>
                <button onClick={() => setNature({...nature, ea: (nature.ea == "green" ? "red" : nature.ea == "red" ? "white" : "green")})} className={"stat stat-"+nature.ea}>{(nature.ea == "green" ? OTHER_STATS_GREEN[level-1][miscrit.ea - 1] : nature.ea == "white" ? OTHER_STATS_WHITE[level-1][miscrit.ea - 1] : OTHER_STATS_RED[level-1][miscrit.ea- 1]) + (arePlatinumOn && platinum.ea) + (areBonusOn && bonus.ea) + relicBonus.ea}</button>
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
                <button onClick={() => setNature({...nature, pa: (nature.pa == "green" ? "red" : nature.pa == "red" ? "white" : "green")})} className={"stat stat-"+nature.pa}>{(nature.pa == "green" ? OTHER_STATS_GREEN[level-1][miscrit.pa - 1] : nature.pa == "white" ? OTHER_STATS_WHITE[level-1][miscrit.pa - 1] : OTHER_STATS_RED[level-1][miscrit.pa - 1]) + (arePlatinumOn && platinum.pa) + (areBonusOn && bonus.pa) + relicBonus.pa}</button>
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
                <button onClick={() => setNature({...nature, ed: (nature.ed == "green" ? "red" : nature.ed == "red" ? "white" : "green")})} className={"stat stat-"+nature.ed}>{(nature.ed == "green" ? OTHER_STATS_GREEN[level-1][miscrit.ed - 1] : nature.ed == "white" ? OTHER_STATS_WHITE[level-1][miscrit.ed - 1] : OTHER_STATS_RED[level-1][miscrit.ed - 1]) + (arePlatinumOn && platinum.ed) + (areBonusOn && bonus.ed) + relicBonus.ed}</button>
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
                <button onClick={() => setNature({...nature, pd: (nature.pd == "green" ? "red" : nature.pd == "red" ? "white" : "green")})} className={"stat stat-"+nature.pd}>{(nature.pd == "green" ? OTHER_STATS_GREEN[level-1][miscrit.pd - 1] : nature.pd == "white" ? OTHER_STATS_WHITE[level-1][miscrit.pd - 1] : OTHER_STATS_RED[level-1][miscrit.pd - 1]) + (arePlatinumOn && platinum.pd) + (areBonusOn && bonus.pd) + relicBonus.pd}</button>
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