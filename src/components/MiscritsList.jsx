/* eslint-disable react/prop-types */
import "../styles/MiscritsList.css"
import { FixedSizeList as List } from "react-window"

export default function MiscritsList({LIST, selected, setSelected}) {

    const Row = ({ index, style }) => {
        const miscrit = LIST[index];
        const modifiedStyle = { ...style, left: "18px", width: "calc(100% - 18px)", top: style.top + 2 * index};
        
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
              <img src={"./assets/profile-pics/" + miscrit.id + ".4.png"} alt="" />
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
          height={400} // Altura del contenedor
          itemCount={LIST.length} // Número total de elementos
          itemSize={44} // Altura de cada elemento
          width={'228px'} // Ancho del contenedor
          right={0}
        >
          {Row}
        </List>
      );
}