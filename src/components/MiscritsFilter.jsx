/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/MiscritsFilter.css"

export default function MiscritsFilter({setFilterType, setFilterRarity, setFilterName}) {
    let [filterTypeHover, setFilterTypeHover] = useState(null)
    let [filterRarityHover, setFilterRarityHover] = useState(null)

    return(
        <div className="filters">
            <div>
                <h2>Filters</h2>
                <input type="text" name="filter-name" id="filter-name" placeholder="Miscrit name..." onChange={(input) => setFilterName(input.target.value)}/>
            </div>
            <div className="filters__types-container">
                <div className="filters__type">
                    <button className={filterTypeHover != null ? "filter-not-selected" : ""} onClick={() => {setFilterType("none"); setFilterTypeHover(null)}}><img src="./assets/types/All-types.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button className={filterTypeHover != "Water" ? "filter-not-selected" : ""} onClick={() => {setFilterType("Water"); setFilterTypeHover("Water")}}><img src="./assets/types/Water.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button className={filterTypeHover != "Fire" ? "filter-not-selected" : ""} onClick={() => {setFilterType("Fire"); setFilterTypeHover("Fire")}}><img src="./assets/types/Fire.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button className={filterTypeHover != "Nature" ? "filter-not-selected" : ""} onClick={() => {setFilterType("Nature"); setFilterTypeHover("Nature")}}><img src="./assets/types/Nature.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button className={filterTypeHover != "Wind" ? "filter-not-selected" : ""} onClick={() => {setFilterType("Wind"); setFilterTypeHover("Wind")}}><img src="./assets/types/Wind.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button className={filterTypeHover != "Lightning" ? "filter-not-selected" : ""} onClick={() => {setFilterType("Lightning"); setFilterTypeHover("Lightning")}}><img src="./assets/types/Lightning.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button className={filterTypeHover != "Earth" ? "filter-not-selected" : ""} onClick={() => {setFilterType("Earth"); setFilterTypeHover("Earth")}}><img src="./assets/types/Earth.webp" alt="" /></button>
                </div>
            </div>
            <div className="filters__rarity-container">
                <div className="filters__rarity">
                    <button className={"null " + (filterRarityHover != null ? "filter-not-selected" : "")} onClick={() => {setFilterRarity("none"); setFilterRarityHover(null)}}>All</button>
                </div>
                <div className="filters__rarity">
                    <button className={"common " + (filterRarityHover != "common" ? "filter-not-selected" : "")} onClick={() => {setFilterRarity("common"); setFilterRarityHover("common")}}>Common</button>
                </div>
                <div className="filters__rarity">
                    <button className={"rare " + (filterRarityHover != "rare" ? "filter-not-selected" : "")} onClick={() => {setFilterRarity("rare"); setFilterRarityHover("rare")}}>Rare</button>
                </div>
                <div className="filters__rarity">
                    <button className={"epic " + (filterRarityHover != "epic" ? "filter-not-selected" : "")} onClick={() => {setFilterRarity("epic"); setFilterRarityHover("epic")}}>Epic</button>
                </div>
                <div className="filters__rarity">
                    <button className={"exotic " + (filterRarityHover != "exotic" ? "filter-not-selected" : "")} onClick={() => {setFilterRarity("exotic"); setFilterRarityHover("exotic")}}>Exotic</button>
                </div>
                <div className="filters__rarity">
                    <button className={"legendary " + (filterRarityHover != "legendary" ? "filter-not-selected" : "")} onClick={() => {setFilterRarity("legendary"); setFilterRarityHover("legendary")}}>Legendary</button>
                </div>
            </div>
        </div>
    )
}