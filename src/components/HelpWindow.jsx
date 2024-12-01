/* eslint-disable react/prop-types */
import "../styles/HelpWindow.css"
import { useState } from "react"

export default function HelpWindow({setHelpActive}) {
    const [help, setHelp] = useState(true)
    const [changelog, setChangelog] = useState(false)

    function handleTabs(tab) {
        if (tab === 1) {
            setHelp(true)
            setChangelog(false)
        } else if (tab === 2){
            setHelp(false)
            setChangelog(true)
        }
    }

    return (
        <div className="window-back">
            <div className="help-window">
                <button className="close-help-button" onClick={() => setHelpActive(false)}>X</button>
                <div className="help-tabs-container">
                    <button onClick={() => handleTabs(1)}><h1>HELP</h1></button>
                    <button onClick={() => handleTabs(2)}><h1>CHANGELOG</h1></button>
                </div>
                {help &&
                <div className="help-container">
                    <ul>
                        <li>Hi! Here you can simulate or calculate how your miscrit will look at any level from 1 to 35. By default, statistics are shown at level 35.</li>
                        <li>You have the possibility to filter the list of miscrits from the filter menu, you can combine all of them at the same time.</li>
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
                                <li>Change the level of the miscrit.</li>
                            </ul>
                        </li>
                        <li>In the game, a miscrit gain 3 bonus points each level, but here they are disabled by default.</li>
                        <li>You can edit the bonus distribution by clicking in the &quot;Edit bonus&quot; button. <br />
                            <ul>
                                <li>You can turn off or on these bonuses just by setting it to 0 or higher.</li>
                                <li>For level bonuses you must set the total points in 102 if you want to edit these bonuses.</li>
                                <li>If you do a &quot;rebonus&quot; or turn off and on some of the bonus, you will lose your edited distribution.</li>
                            </ul>
                        </li>

                    </ul>
                </div>}
                {changelog &&
                <div className="changelog-container">
                    <div className="changelog-version">
                        <h2>v0.6.9 - December 1, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Foil Croaky</li>
                            <li>Applied stats rebalance to: Nessy, Eggy, Foil Thundercracker</li>
                            <li>Fixed some names</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.8 - November 24, 2024</h2>
                        <hr />
                        <ul>
                            <li>Applied stats rebalance to: Lavarilla, Pamboo, Rockodile, Boneshee, Felis, Octavio, Hotdog, Echino, Ignios, Winnebeargo, Foil Waddles, Dark Shellbee, Dark Squibee, Dark Aria, Dark Lavarilla, Dark Flutterpat, Hoopty, Lil Bubs, Dark Tongutail and Freedom</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.7 - November 17, 2024</h2>
                        <hr />
                        <ul>
                            <li>Applied Dark Elefauna and Dark Breezycheeks stats rebalace</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.6 - November 16, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Light Snorkels</li>
                            <li>Apply Lavarilla stats rebalance</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.5 - November 11, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added missing Dark Jellyshock</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.3 - November 1, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Patchkin and Skelepup</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.2 - October 23, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Da Windy</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.6.1 - October 19, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Light Statikat</li>
                            <li>Applied stats buff to Dark Sparkitten, Foil Kiloray, Lavazard</li>
                            <li>Applied stats rebalance to Ursiwave, Snorkels, Fennie, Fubby</li>
                            <li>Applied stats nerf to Treemur, Dark Owlie, Flaring</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.8.5 - September 26, 2024</h2>
                        <hr />
                        <ul>
                            <li>You can now change the miscrit level</li>
                            <li>Level and platinum bonuses are now calculated for all 35 levels, this means that if you activate the bonuses and change the level of the miscrit the bonuses will remain unless you do a rebonus. Does not apply if you manually edited the bonuses</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.8 - September 21, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Dark Vexie and Light Hawkai</li>
                            <li>Images optimized by 50%</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.7.1 - September 17, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Gemix</li>
                            <li>Fixed some typing bugs</li>
                            <li>Fixed some evo names</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.7 - September 10, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Lavazard</li>
                            <li>Checked base stats of every miscrit and fixed a lot of them</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.5 - September 1, 2024</h2>
                        <hr />
                        <ul>
                            <li>Applied stats buff to Lavarilla, Quirk, Shellbee, Snortus, Equestrion, Nessy, Kiloray, Light Squibee, Dark Lumera, Echino, Hippoke, Arigato</li>
                            <li>Applied stats nerf to Light Frostmite, Gog, Pillblaze, Light Slithero, Podo, Blazebit, Dark Kiloray</li>
                            <li>Applied stats rebalance to Flue, Hotfoot, Snatcher, Cubsprout, Hawkai, Leggy, Aria, Mumbah, Dark Nessy, Dark Spinnerette, Dark Steamguin, Narlope, Light Nibbles, Orcatide</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.4 - August 24, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Opigum</li>
                            <li>Made Pollifog available</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.3 - August 17, 2024</h2>
                        <hr />
                        <ul>
                            <li>The app now calculates stats at level 35</li>
                            <li>You can now filter the list by name</li>
                            <li>You can now visually distinguish the applied filters</li>
                            <li>Added Blighted Flowerpiller</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.5.0 - August 3, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added a lot of new miscrits from Sunfall Shores (no-spoiler)</li>
                            <li>Fixed some miscrits stats bug</li>
                            <li>Changed image for &quot;no spoilers&quot; in the miscrits list</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.4.8 - July 27, 2024</h2>
                        <hr />
                        <ul>
                            <li>Applied stats rework to Steamguin, Dark Sparkupine, Nero and Sparkslug</li>
                            <li>Fixed Liothning rarity</li>
                            <li>Now you can edit the bonus distribution!</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.4.7 - July 19, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Dark Quirk and Dark Squirmle</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.4.4 - July 13, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Flaring</li>
                            <li>Desaturated image in list for unavailable miscrits</li>
                            <li>Turned black main picture for unavailable miscrits</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.4.3 - July 8, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Dark and Foil Luna images</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.4.1 - July 6, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Dark and Foil Luna with no images</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.4.0 - July 4, 2024</h2>
                        <hr />
                        <ul>
                            <li>Added Bodo, Splender, Freedom and Spangles</li>
                        </ul>
                    </div>
                    <div className="changelog-version">
                        <h2>v0.3.5 - June 27, 2024</h2>
                        <hr />
                        <ul>
                            <li>Fixed bug with tabs in help window</li>
                            <li>Fixed bug with help button not showing if you don&apos;t select a Miscrit</li>
                        </ul>
                    </div>
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