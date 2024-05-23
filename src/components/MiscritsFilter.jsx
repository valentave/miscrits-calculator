/* eslint-disable react/prop-types */
import "../styles/MiscritsFilter.css"

export default function MiscritsFilter({setFilterType, setFilterRarity}) {
    return(
        <div className="filters">
            <h2>Filter</h2>
            <div className="filters__types-container">
                <div className="filters__type">
                    <button onClick={() => setFilterType("none")}><img src="./assets/types/All-types.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button onClick={() => setFilterType("Water")}><img src="./assets/types/Water.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button onClick={() => setFilterType("Fire")}><img src="./assets/types/Fire.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button onClick={() => setFilterType("Nature")}><img src="./assets/types/Nature.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button onClick={() => setFilterType("Wind")}><img src="./assets/types/Wind.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button onClick={() => setFilterType("Lightning")}><img src="./assets/types/Lightning.webp" alt="" /></button>
                </div>
                <div className="filters__type">
                    <button onClick={() => setFilterType("Earth")}><img src="./assets/types/Earth.webp" alt="" /></button>
                </div>
            </div>
            <div className="filters__rarity-container">
                <div className="filters__rarity">
                    <button onClick={() => setFilterRarity("none")}>All</button>
                </div>
                <div className="filters__rarity">
                    <button onClick={() => setFilterRarity("common")}>Common</button>
                </div>
                <div className="filters__rarity">
                    <button onClick={() => setFilterRarity("rare")}>Rare</button>
                </div>
                <div className="filters__rarity">
                    <button onClick={() => setFilterRarity("epic")}>Epic</button>
                </div>
                <div className="filters__rarity">
                    <button onClick={() => setFilterRarity("exotic")}>Exotic</button>
                </div>
                <div className="filters__rarity">
                    <button onClick={() => setFilterRarity("legendary")}>Legendary</button>
                </div>
            </div>
        </div>
    )
}