export default function CharacterCard({ name, species, age, planet }) {
  return (
    <div className="character-card">
      <h2>{name}</h2>
      <p>Species: {species}</p>
      <p>Age: {age}</p>
      <p>Planet: {planet}</p>
    </div>
  );
}
