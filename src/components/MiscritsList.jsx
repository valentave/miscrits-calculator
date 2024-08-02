/* eslint-disable react/prop-types */
import "../styles/MiscritsList.css";
import { FixedSizeList as List } from "react-window";

export default function MiscritsList({ LIST, selected, setSelected }) {
  const Row = ({ index, style }) => {
    const miscrit = LIST[index];
    const modifiedStyle = { ...style, left: "21px", width: "calc(100% - 21px)", height: "44px"};

    return (
      <button
        onClick={() => setSelected(miscrit)}
        key={miscrit.id + "-" + miscrit.name}
        className={"miscrits-list__miscrit" + (selected?.id === miscrit.id ? " selected" : "")}
        style={modifiedStyle}
      >
        <div className="miscrits-list__type-container">
          <img src={"./assets/types/" + miscrit.type + ".webp"} alt="" />
        </div>
        <div className="miscrits-list__picture-container">
          <div className={"picture-container__rarity rarity-" + miscrit.rarity}></div>
          <img className={"profile-available-" + miscrit.available} src={miscrit.available == "spoiler" ? "./assets/profile-pics/missing.webp" : ("./assets/profile-pics/" + miscrit.id + ".webp")} alt="" />
        </div>
        <div className="miscrits-list__name-container">
          <p>{miscrit.name}</p>
        </div>
      </button>
    );
  };

  return (
    <List
      className="miscrits-list"
      height={400}
      itemCount={LIST.length}
      itemSize={46}
      width={228}
    >
      {Row}
    </List>
  );
}