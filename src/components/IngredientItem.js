import React from "react"
import EditNote from "./EditNote"

const IngredientItem = ({name, legal, notes}) => {
		return (
      <div className="item">
        <h3>{name}</h3>
        { legal ? <p className="legal status"> LEGAL </p> : <p className="illegal status"> ILLEGAL </p>}
        <EditNote notes={notes} />
      </div>
    )
}

export default IngredientItem
