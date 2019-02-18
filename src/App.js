import React, { Component } from 'react';
import IngredientItem from "./components/IngredientItem"
import './App.css';
import firebase from "./firebase"


class App extends Component {
  state = {
    ingredients: {}
  }

  componentDidMount(){
    const ingredients = {}
    firebase.db.collection("ingredients").get()
      .then(payload => payload.docs.forEach(doc => ingredients[doc.data().id] = doc.data()))
      .then(() => this.setState({
        ingredients
      }))
  }

  sortIngredientIds(ingredientIds){
    return ingredientIds.sort((a, b) => {
        let nameA = this.state.ingredients[a].name.toLowerCase()
        let nameB = this.state.ingredients[b].name.toLowerCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
  }


  render() {
    console.log(this.state);
    let ingredients = Object.keys(this.state.ingredients)
    return (
      <div className="App">
        <div id="ingredients-list">
          {this.sortIngredientIds(ingredients).map(id => <IngredientItem key={id} {...this.state.ingredients[id]} />)}
        </div>
      </div>
    );
  }
}

export default App;
