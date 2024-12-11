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
  const [selectedMiscrit, setSelectedMiscrit] = useState(false)
  const [filterType, setFilterType] = useState("none")
  const [filterRarity, setFilterRarity] = useState("none")
  const [filterName, setFilterName] = useState("")
  const [filteredList, setFilteredList] = useState(LIST)
  const [areBonusOn, setAreBonusOn] = useState(false)
  const [arePlatinumOn, setArePlatinumOn] = useState(false)
  const [helpActive, setHelpActive] = useState(false)
  const [editActive, setEditActive] = useState(false)
  const [level, setLevel] = useState(35)
  const [bonusList, setBonusList] = useState({
    "1": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "2": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "3": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "4": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "5": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "6": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "7": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "8": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "9": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "10": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "11": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "12": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "13": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "14": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "15": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "16": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "17": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "18": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "19": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "20": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "21": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "22": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "23": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "24": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "25": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "26": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "27": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "28": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "29": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "30": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "31": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "32": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "33": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "34": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "35": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
  })
  const [platinumList, setPlatinumList] = useState({
    "1": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "2": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "3": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "4": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "5": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "6": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "7": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "8": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "9": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "10": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "11": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "12": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "13": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "14": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "15": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "16": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "17": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "18": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "19": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "20": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "21": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "22": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "23": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "24": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "25": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "26": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "27": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "28": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "29": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "30": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "31": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "32": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "33": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "34": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
    "35": {hp:0, sp:0, ea:0, pa:0, ed:0, pd:0},
  })
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
  const [relicBonus, setRelicBonus] = useState({
    "hp": 0,
    "sp": 0,
    "ea": 0,
    "ed": 0,
    "pa": 0,
    "pd": 0
  })

  function handleSelected(miscrit) {
    setSelectedMiscrit(miscrit)
  }

  useEffect(() => {
    setBonus(bonusList[level])
    setPlatinum(platinumList[level])
  },[level])

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

  function handlePlatinum(list, turn) {
    if(list && list.length > 0) {
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
    if(turn) {
      if(arePlatinumOn) setArePlatinumOn(false)
      else {
        setArePlatinumOn(true)
        if (platinum.hp + platinum.sp + platinum.ea + platinum.ed + platinum.pa + platinum.pd == 0) {
          handlePlatinum()
        }
      } 
      return 1
    }
    const platinumCopy = {...platinumList}
    for (let i = 2; i <= 35; i++){
      let distribution = randomizeStats(1);
      platinumCopy[i] = {
        hp: platinumCopy[i-1].hp + distribution[0],
        sp: platinumCopy[i-1].sp + distribution[1],
        ea: platinumCopy[i-1].ea + distribution[2],
        pa: platinumCopy[i-1].pa + distribution[3],
        ed: platinumCopy[i-1].ed + distribution[4],
        pd: platinumCopy[i-1].pd + distribution[5]
      }
    }
    setPlatinum({...platinumCopy[level]})
    setPlatinumList({...platinumCopy})
  }

  function handleBonus(list, turn) {
    if(list && list.length > 0) {
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
    if(turn) {
      if(areBonusOn) setAreBonusOn(false)
      else {
        setAreBonusOn(true)
        if (bonus.hp + bonus.sp + bonus.ea + bonus.ed + bonus.pa + bonus.pd == 0) {
          handleBonus()
        }
      }
      return 1
    }
    const bonusCopy = {...bonusList}
    for (let i = 2; i <= 35; i++){
      let distribution = randomizeStats(3);
      bonusCopy[i] = {
        hp: bonusCopy[i-1].hp + distribution[0],
        sp: bonusCopy[i-1].sp + distribution[1],
        ea: bonusCopy[i-1].ea + distribution[2],
        pa: bonusCopy[i-1].pa + distribution[3],
        ed: bonusCopy[i-1].ed + distribution[4],
        pd: bonusCopy[i-1].pd + distribution[5]
      }
    }
    setBonus({...bonusCopy[level]})
    setBonusList({...bonusCopy})
  }

  function rebonus() {
    if (arePlatinumOn) {
      let distribution = randomizeStats((level - 1))
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
        distribution = randomizeStats((level - 1) * 3)
      } while(distribution.some(value => value > (level - 1)));
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
      <EditBonuswindow 
        setEditActive={setEditActive} 
        bonus={bonus} platinum={platinum} 
        changePlatinum={handlePlatinum} 
        changeBonus={handleBonus}
        level={level}/>}
      <div className="calculator-container">
        <button className="help-button" onClick={() => setHelpActive(true)}>?</button>
        <MiscritsFilter 
          setFilterType={setFilterType} 
          setFilterRarity={setFilterRarity} 
          setFilterName={setFilterName}/>
        <MiscritsList 
          LIST={filteredList} 
          selected={selectedMiscrit} 
          setSelected={handleSelected}/>
        <div className="miscrit-name-container">
          <h1 className="miscrit-name">{selectedMiscrit?.evoName?.toUpperCase()}</h1>
        </div>
        {selectedMiscrit &&
        <Options 
          setPlatinum={handlePlatinum} 
          setBonus={handleBonus} 
          rebonus={rebonus} 
          changeNature={changeNature}/>
        }
        {selectedMiscrit &&
        <Stats
          miscrit={selectedMiscrit} 
          relicBonus={relicBonus}
          areBonusOn={areBonusOn} 
          bonus={bonus} 
          arePlatinumOn={arePlatinumOn} 
          platinum={platinum} 
          nature={statsNature} 
          setNature={setStatsNature} 
          setEditActive={setEditActive}
          level={level}
          setLevel={setLevel}/>
        }
        {selectedMiscrit &&
        <MiscritMain 
          miscrit={selectedMiscrit} 
          areBonusOn={areBonusOn} 
          arePlatinumOn={arePlatinumOn} 
          setRelicBonus={setRelicBonus}
          setHelpActive={setHelpActive}/>
        }
      </div>
    </main>
  )
}

export default App
