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
                        <h2>v0.3.4 - June 26, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added images for Dark Tongutail and Dark Tulipinny</li>
                            <li>Changed the size of images to fit 250px height</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.3.2 - June 24, 2024</h2>
                        <hr />
                        <ul>
                            <li>The version numbering was changed to follow the line of the game</li>
                            <li>Added many new crits
                                <ul><li>Some of them do not have images yet so as not to spoil them</li></ul>
                            </li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.1.5 - June 11, 2024</h2>
                        <hr />
                        <ul>
                            <li>Applied a lot of stats balances</li>
                            <li>Added Dark Auger and Dark Aria</li>
                            <li>Added base stats indicator</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.1.4</h2>
                        <hr />
                        <ul>
                            <li>Applied stats buff to Dark Steamguin</li>
                            <li>Applied stats rework to Waddles and Foil Kiloray</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.1.3</h2>
                        <hr />
                        <ul>
                            <li>Applied stats rework to Blighted Fiender, Kelpa, Dark Waddles, Nanaslug, Foil Flintly, Dark Steamguin, Gog, Eggy</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.1.2</h2>
                        <hr />
                        <ul>
                            <li>Added images for Darks Sparkupine, Squibee, Twiggum and Waddles</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.1.1</h2>
                        <hr />
                        <ul>
                            <li>Applied stats buff to Blighted Flue and Dark Poltergust</li>
                            <li>Applied stats rework to Dark Treemur, Liothning, Blobroller, Foil Vhisp, Foil Vexie, Foil Thundercracker and Foil Waddles</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.1.0</h2>
                        <hr />
                        <ul>
                            <li>Added default image for no spoilers</li>
                            <li>Added Foil Vexie and Foil Vhisp images</li>
                            <li>Added new miscrits (Forest overhaul)</li>
                            <li>New darks without images (no spoiler)</li>
                            <li>Applied stats nerf to Mama, Blighted Flue and Dark Poltergust</li>
                            <li>Applied stats rework to Blighted Cubsprout, Foil Fossillia and Defilio</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.0.5</h2>
                        <hr />
                        <ul>
                            <li>Fixed Dorux type</li>
                            <li>Fixed Dark Aukamotive artwork</li>
                            <li>Improved Dorux thumbnail</li>
                            <li>Added Foil Vhisp and Foil Vexie</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.0.4</h2>
                        <hr />
                        <ul>
                            <li>Added all 220 available miscrits images</li>
                            <li>Changed images format from png to webp</li>
                            <li>Added Foil Vexie and Foil Vhisp (without images)</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.0.3</h2>
                        <hr />
                        <ul>
                            <li>Added all 217 available miscrits (most of the images are missing)</li>
                            <li>Added a small padding to the left of the list</li>
                            <li>Fixed bug: as you go down the list, fewer elements are rendered</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.0.2</h2>
                        <hr />
                        <ul>
                            <li>Added first 20 miscrits</li>
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