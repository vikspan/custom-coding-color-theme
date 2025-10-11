import React from "react";
import Button from "../../common/Button/Button";
import "./CodeColorRandomizer.scss";

const CodeColorRandomizer = ({ colorScheme, handleRandom, handleSave }) => {

  return (
    <div className="color-randomizer">
      <h3 className="color-randomizer__title">Generate Random Colors</h3>
      <div className="color-randomizer__list">
        {
          colorScheme.map((item, i) => (
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
