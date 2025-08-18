import React from "react";
import Button from "../../common/Button/Button";
import "./CodeColorRandomizer.scss";

const CodeColorRandomizer = ({ data, handleRandom, handleSave }) => {

  return (
    <div className="color-randomizer">
      <h3 className="color-randomizer__title">Random Color Generator</h3>
      <div className="color-randomizer__list">
        {
          data.map((item, i) => (
            <Button 
              key={i} 
              onClick={() => handleRandom(item.construct)}
            >
              {item.title}
            </Button> 
          ))
        }
      </div>
      <Button onClick={handleSave} variant="primary" size="lg">Save</Button>
    </div>
  )
}

export default CodeColorRandomizer;
