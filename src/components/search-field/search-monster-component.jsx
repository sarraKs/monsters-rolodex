import { Component } from "react";
//import "./search-monster-style.css";

class SearchMonster extends Component {
  render() {
    const { inputSearch, handleChange } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monster"
        value={inputSearch}
        onChange={handleChange}
      />
    );
  }
}

export default SearchMonster;
