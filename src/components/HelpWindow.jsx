/* eslint-disable react/prop-types */
import "../styles/HelpWindow.css"
import { useState } from "react"

export default function HelpWindow({setHelpActive}) {
    const [help, setHelp] = useState(true)
    const [changelog, setChangelog] = useState(false)

    function handleTabs() {
        if (help) {
            setHelp(false)
            setChangelog(true)
        } else {
            setHelp(true)
            setChangelog(false)
        }
    }

    return (
        <div className="window-back">
            <div className="help-window">
                <button className="close-help-button" onClick={() => setHelpActive(false)}>X</button>
                <div className="help-tabs-container">
                    <button onClick={() => handleTabs()}><h1>HELP</h1></button>
                    <button onClick={() => handleTabs()}><h1>CHANGELOG</h1></button>
                </div>
                {help &&
                <div className="help-container">
                    <ul>
                        <li>Hi! Here you can simulate or calculate what your miscrit might look like when it reaches level 30.</li>
                        <li>You have the possibility to filter the list of miscrits from the filter menu, you can combine the type and rarity filters at the same time.</li>
                        <li>In the options menu you can: <br/>
                            <ul>
                                <li>Activate or deactivate both platinum training and bonuses points.</li>
                                <li>Rebonus, this randomizes all your bonus or platinum points if they are active.</li>
                                <li>Change all stats genetics to white, green or red</li>
                            </ul>
                        </li>
                        <li>In the stats menu you can: <br/>
                            <ul>
                                <li>Hover over the icons or statistics to see the bonuses applied to each one.</li>
                                <li>Click on each icon or statistic to change its genetic to white, green or red.</li>
                            </ul>
                        </li>
                        <li>In the game, a level 30 miscrit already has 87 bonus points automatically and randomly assigned, but here they are disabled by default.</li>
                    </ul>
                </div>}
                {changelog &&
                <div className="changelog-container">
                    <div className="changelog-version">
                        <h2>v0.0.2</h2>
                        <hr />
                        <ul>
                            <li>Add first 20 miscrits</li>
                            <li>Fixed bug: filter didn&apos;t match dual miscrits</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.0.1</h2>
                        <hr />
                        <ul>
                            <li>First version</li>
                            <li>Added only one miscrit repeated to test</li>
                        </ul>    
                    </div>
                </div>}
            </div>
        </div>
    )
}