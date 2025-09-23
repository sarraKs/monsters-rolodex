import { Component } from "react";
import "./App.css";
import SearchMonster from "./components/search-field/search-monster-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => {
        //const monsters = users.map((user) => user.name);
        this.setState({ monsters: users }, () => {
          console.log(users);
        });
      })
    );
  }

  handleChange = (event) => {
    const inputSearch = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { inputSearch };
    });
  };

  render() {
    const { inputSearch, monsters } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(inputSearch);
    });

    return (
      <div className="App">
        <h1> Hello Monster Rolodex App</h1>
        <SearchMonster
          inputSearch={inputSearch}
          handleChange={this.handleChange}
        />

        <div className="monster-container">
          {filteredMonsters.map((monster) => {
            return (
              <p className="monster" key={monster.id}>
                {monster.name}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
