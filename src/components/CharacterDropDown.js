export default function CharacterDropDown({ callback }) {
  return (
    <select
      className="quote-by-character"
      onChange={(e) => {
        callback(e.target.value);
      }}
    >
      <option value="Bender">Bender</option>
      <option value="Dr Zoidberg">Dr Zoidberg</option>
      <option value="South America">South America</option>
      <option value="Oceania">Oceania</option>
      <option value="Leela">Leela</option>
    </select>
  );
}
