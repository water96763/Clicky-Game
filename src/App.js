import React, { Component } from 'react';
import Header from "./components/Header/Header.js";
import './App.css';
import dogs from "./images.json";
import Main from "./components/Main/Main.js";

class App extends Component {
  state = {
    dogs,
    picked: [],
    score: 0,
  };

imageClick = event => {
  const currentMain = event.target.alt;
  const MainAlreadyClicked =
    this.state.picked.indexOf(currentMain) > -1;


  if (MainAlreadyClicked) {
    this.setState({
      dogs: this.state.dogs.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      picked: [],
      score: 0
    });
      alert("Game over");


  } else {
    this.setState(
      {
        dogs: this.state.dogs.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        picked: this.state.picked.concat(
          currentMain
        ),
        score: this.state.score + 1
      },
 
      () => {
        if (this.state.score === 12) {
          alert("You Win!");
          this.setState({
            dogs: this.state.dogs.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            picked: [],
            score: 0
          });
        }
      }
    );
  }
};


render() {
  return (
    <div>
      <Header />
        score={this.state.score}
      <div className="wrapper">
        {this.state.dogs.map(dogs => (
          <Main
            id={dogs.id}
            name={dogs.name}
            image={dogs.image}
            key={dogs.id}
          />
        ))}
    </div>
    </div>
  );
}
}




export default App;
