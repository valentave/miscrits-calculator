import "./styles/App.css"
import { useEffect, useState } from "react"
import MiscritsList from "./components/MiscritsList"
import MiscritsFilter from "./components/MiscritsFilter"
import MiscritMain from "./components/MiscritMain"
import LIST from "./data/miscrits.json"
import Options from "./components/Options"
import Stats from "./components/Stats"
import HelpWindow from "./components/HelpWindow"
import EditBonuswindow from "./components/EditBonusWindow"

function App() {
  const MAX_BONUS = 102
  const MAX_PLATINUM = 34
  const [selectedMiscrit, setSelectedMiscrit] = useState(false)
  const [filterType, setFilterType] = useState("none")
  const [filterRarity, setFilterRarity] = useState("none")
  const [filterName, setFilterName] = useState("")
  const [filteredList, setFilteredList] = useState(LIST)
  const [areBonusOn, setAreBonusOn] = useState(false)
  const [arePlatinumOn, setArePlatinumOn] = useState(false)
  const [helpActive, setHelpActive] = useState(false)
  const [editActive, setEditActive] = useState(false)
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
    }).filter(n => {
      if (n.name.toLowerCase().includes(filterName.toLowerCase())) return n
      return false
    }))
  }, [filterType, filterRarity, filterName])

  function randomizeStats(bonus) {
    let points = [0, ...Array.from({length: 5}, () => Math.floor(Math.random() * (bonus + 1))), bonus];
    points.sort((a, b) => a - b);
    let distribution = [];
    for (let i = 1; i < points.length; i++) {
      distribution.push(points[i] - points[i - 1]);
    }
    return distribution;
  }

  function handlePlatinum(list) {
    if(list) {
      setPlatinum({
        hp: list[0],
        sp: list[1],
        ea: list[2],
        pa: list[3],
        ed: list[4],
        pd: list[5],
      })
      if (list[0] + list[1] + list[2] + list[3] + list[4] + list[5]) {
        setArePlatinumOn(true)
      } else {
        setArePlatinumOn(false)
      }
      return 1
    }
    if (arePlatinumOn) {
      setArePlatinumOn(false)
    } else {
      let distribution = randomizeStats(MAX_PLATINUM);
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

  function handleBonus(list) {
    if(list) {
      setBonus({
        hp: list[0],
        sp: list[1],
        ea: list[2],
        pa: list[3],
        ed: list[4],
        pd: list[5],
      })
      if (list[0] + list[1] + list[2] + list[3] + list[4] + list[5]) {
        setAreBonusOn(true)
      } else {
        setAreBonusOn(false)
      }
      return 1
    }
    if(areBonusOn) {
      setAreBonusOn(false)
    } else {
      let distribution;
      do {
        distribution = randomizeStats(MAX_BONUS)
      } while(distribution.some(value => value > MAX_PLATINUM));
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
      let distribution = randomizeStats(MAX_PLATINUM)
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
        distribution = randomizeStats(MAX_BONUS)
      } while(distribution.some(value => value > MAX_PLATINUM));
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
      {editActive &&
      <EditBonuswindow setEditActive={setEditActive} bonus={bonus} platinum={platinum} changePlatinum={handlePlatinum} changeBonus={handleBonus}/>}
      <div className="calculator-container">
        <button className="help-button" onClick={() => setHelpActive(true)}>?</button>
        <MiscritsFilter setFilterType={setFilterType} setFilterRarity={setFilterRarity} setFilterName={setFilterName}/>
        <MiscritsList LIST={filteredList} selected={selectedMiscrit} setSelected={handleSelected}/>
        <div className="miscrit-name-container">
          <h1 className="miscrit-name">{selectedMiscrit?.evoName?.toUpperCase()}</h1>
        </div>
        {selectedMiscrit &&
        <Options setPlatinum={handlePlatinum} setBonus={handleBonus} rebonus={rebonus} changeNature={changeNature}/>
        }
        {selectedMiscrit &&
        <Stats miscrit={selectedMiscrit} areBonusOn={areBonusOn} bonus={bonus} arePlatinumOn={arePlatinumOn} platinum={platinum} nature={statsNature} setNature={setStatsNature} setEditActive={setEditActive}/>
        }
        {selectedMiscrit &&
        <MiscritMain miscrit={selectedMiscrit} areBonusOn={areBonusOn} arePlatinumOn={arePlatinumOn} setHelpActive={setHelpActive}/>
        }
      </div>
    </main>
  )
}

export default App
