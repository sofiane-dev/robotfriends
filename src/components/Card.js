export default function Card(props) {
  const { id, name, email } = props.robot;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
