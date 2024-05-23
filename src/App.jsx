import "./styles/App.css"
import { useEffect, useState } from "react"
import MiscritsList from "./components/MiscritsList"
import MiscritsFilter from "./components/MiscritsFilter"
import MiscritMain from "./components/MiscritMain"
import LIST from "./data/miscrits.json"
import Options from "./components/Options"
import Stats from "./components/Stats"
import HelpWindow from "./components/HelpWindow"

function App() {
  const [selectedMiscrit, setSelectedMiscrit] = useState(false)
  const [filterType, setFilterType] = useState("none")
  const [filterRarity, setFilterRarity] = useState("none")
  const [filteredList, setFilteredList] = useState(LIST)
  const [areBonusOn, setAreBonusOn] = useState(false)
  const [arePlatinumOn, setArePlatinumOn] = useState(false)
  const [helpActive, setHelpActive] = useState(false)
  const [bonus, setBonus] = useState({
    hp: 0,
    sp: 0,
    ea: 0,
    pa: 0,
    ed: 0,
    pd: 0
  })
  const [platinum, setPlatinum] = useState({
    hp: 0,
    sp: 0,
    ea: 0,
    pa: 0,
    ed: 0,
    pd: 0
  })
  const [statsNature, setStatsNature] = useState({
    hp: "white",
    sp: "white",
    ea: "white",
    pa: "white",
    ed: "white",
    pd: "white"
  })

  function handleSelected(miscrit) {
    setSelectedMiscrit(miscrit)
  }

  useEffect(() => {
    setFilteredList(LIST.filter(n => {
      if (filterRarity == "none") return n
      if (filterRarity == n.rarity) return n
      return false
    }).filter(n => {
      if (filterType == "none") return n
      if (n.type.includes(filterType)) return n
      return false
    }))
  }, [filterType, filterRarity])

  function randomizeStats(bonus) {
    let points = [0, ...Array.from({length: 5}, () => Math.floor(Math.random() * (bonus + 1))), bonus];
    points.sort((a, b) => a - b);
    let distribution = [];
    for (let i = 1; i < points.length; i++) {
      distribution.push(points[i] - points[i - 1]);
    }
    return distribution;
  }

  function handlePlatinum() {
    if (arePlatinumOn) {
      setArePlatinumOn(false)
    } else {
      let distribution = randomizeStats(29);
      setArePlatinumOn(true)
      setPlatinum({
        hp: distribution[0],
        sp: distribution[1],
        ea: distribution[2],
        pa: distribution[3],
        ed: distribution[4],
        pd: distribution[5]
      })
    }
  }

  function handleBonus() {
    if(areBonusOn) {
      setAreBonusOn(false)
    } else {
      let distribution;
      do {
        distribution = randomizeStats(87)
      } while(distribution.some(value => value > 29));
      setAreBonusOn(true)
      setBonus({
        hp: distribution[0],
        sp: distribution[1],
        ea: distribution[2],
        pa: distribution[3],
        ed: distribution[4],
        pd: distribution[5]
      })
    }
  }

  function rebonus() {
    if (arePlatinumOn) {
      let distribution = randomizeStats(29)
      setPlatinum({
        hp: distribution[0],
        sp: distribution[1],
        ea: distribution[2],
        pa: distribution[3],
        ed: distribution[4],
        pd: distribution[5]
      })
    }
    if (areBonusOn) {
      let distribution
      do {
        distribution = randomizeStats(87)
      } while(distribution.some(value => value > 29));
      setBonus({
        hp: distribution[0],
        sp: distribution[1],
        ea: distribution[2],
        pa: distribution[3],
        ed: distribution[4],
        pd: distribution[5]
      })
    }
  }

  function changeNature() {
    if(statsNature.hp == "white") setStatsNature({
      hp: "green",
      sp: "green",
      ea: "green",
      pa: "green",
      ed: "green",
      pd: "green"
    }); else if(statsNature.hp == "green") setStatsNature({
      hp: "red",
      sp: "red",
      ea: "red",
      pa: "red",
      ed: "red",
      pd: "red"
    }); else if(statsNature.hp == "red") setStatsNature({
      hp: "white",
      sp: "white",
      ea: "white",
      pa: "white",
      ed: "white",
      pd: "white"
    });
  }

  return (
    <main>
      {helpActive && 
      <HelpWindow setHelpActive={setHelpActive}/>}
      <div className="calculator-container">
        <MiscritsFilter setFilterType={setFilterType} setFilterRarity={setFilterRarity}/>
        <MiscritsList LIST={filteredList} selected={selectedMiscrit} setSelected={handleSelected}/>
        <div className="miscrit-name-container">
          <h1 className="miscrit-name">{selectedMiscrit?.evoName?.toUpperCase()}</h1>
        </div>
        {selectedMiscrit &&
        <Options setPlatinum={handlePlatinum} setBonus={handleBonus} rebonus={rebonus} changeNature={changeNature}/>
        }
        {selectedMiscrit &&
        <Stats miscrit={selectedMiscrit} areBonusOn={areBonusOn} bonus={bonus} arePlatinumOn={arePlatinumOn} platinum={platinum} nature={statsNature} setNature={setStatsNature}/>
        }
        {selectedMiscrit &&
        <MiscritMain miscrit={selectedMiscrit} areBonusOn={areBonusOn} arePlatinumOn={arePlatinumOn} setHelpActive={setHelpActive}/>
        }
      </div>
    </main>
  )
}

export default App
