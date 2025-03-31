export default function miscritsJsonGenerator(JSON) {
    let list = []
    for (let item of JSON) {
        if (!isNaN(item.id)) {
            let newMiscrit = {}
            newMiscrit.id = item.id
            newMiscrit.name = item.names[0]
            newMiscrit.evoName = item.names[3]
            newMiscrit.type = item.element
            newMiscrit.rarity = item.rarity.toLowerCase()
            newMiscrit.hp = item.hp == "Weak" ? 1 : item.hp == "Moderate" ? 2 : item.hp == "Strong" ? 3 : item.hp == "Max" ? 4 : item.hp == "Elite" ? 5 : 0
            newMiscrit.ea = item.ea == "Weak" ? 1 : item.ea == "Moderate" ? 2 : item.ea == "Strong" ? 3 : item.ea == "Max" ? 4 : item.ea == "Elite" ? 5 : 0
            newMiscrit.ed = item.ed == "Weak" ? 1 : item.ed == "Moderate" ? 2 : item.ed == "Strong" ? 3 : item.ed == "Max" ? 4 : item.ed == "Elite" ? 5 : 0
            newMiscrit.pa = item.pa == "Weak" ? 1 : item.pa == "Moderate" ? 2 : item.pa == "Strong" ? 3 : item.pa == "Max" ? 4 : item.pa == "Elite" ? 5 : 0
            newMiscrit.pd = item.pd == "Weak" ? 1 : item.pd == "Moderate" ? 2 : item.pd == "Strong" ? 3 : item.pd == "Max" ? 4 : item.pd == "Elite" ? 5 : 0
            newMiscrit.spd = item.spd == "Weak" ? 1 : item.spd == "Moderate" ? 2 : item.spd == "Strong" ? 3 : item.spd == "Max" ? 4 : item.spd == "Elite" ? 5 : 0
            newMiscrit.available = item.locations.non ? false : true
            list.push(newMiscrit)
        }
    }
    return list
}