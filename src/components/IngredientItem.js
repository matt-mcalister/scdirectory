import React from "react"

const IngredientItem = ({name, legal, notes}) => {
		return (
      <div className="item">
        <h3>{name}</h3>
        { legal ? <p className="legal status"> LEGAL </p> : <p className="illegal status"> ILLEGAL </p>}
        {notes !== "" && <p>{notes}</p>}
      </div>
    )
}

export default IngredientItem
