import { Component } from "react";
import Card from "../components/Card";

class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.robots.map((robot) => (
          <Card key = {robot.id} robot={robot} />
        ))}
      </div>
    );
  }
}
export default CardList
