import { Component } from "react";
import "./App.css";
import SearchMonster from "./components/search-field/search-monster-component";
import CardList from "./components/card-list/card-list-component";

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
        this.setState({ monsters: users });
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
        <h1 className="app-title"> Hello Monster Rolodex App</h1>
        <SearchMonster
          inputSearch={inputSearch}
          handleChange={this.handleChange}
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
