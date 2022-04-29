export default function CharacterCard({ character, quote, image }) {
  return (
    <div className="character-card">
      <h2>{character}</h2>
      <p>quote: {quote}</p>
      <img src={image} />
    </div>
  );
}
