import { Component } from "react";
import "./card-list-style.css";
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
