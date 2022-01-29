import Card from "components/Card";

export default function CardList(props) {
  return (
    <div>
      {props.robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
}
