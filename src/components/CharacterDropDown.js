export default function CharacterDropDown({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select
      className="quote-by-character"
      onChange={handleChange}
      style={{ backgroundColor: 'green' }}
    >
      <option value="All">All</option>
      <option value="Bender">Bender</option>
      <option value="Dr Zoidberg">Dr Zoidberg</option>
      <option value="Leela">Leela</option>
      <option value="URL">URL</option>
      <option value="Fry">Fry</option>
      <option value="Morbo">Morbo</option>
      <option value="Professor Farnsworth">Professor</option>
    </select>
  );
}
//
// Dropdown value = bender then bender =bender?

// I want to filter quotes by character name! If character names match up from dropdown menu only quotes but that character will appear.

// how do I link my dropdown. I'm having a hard time connecting. I thought I could do  filter but it wasn't working.
///

// turn filters into
// looping over to create a new set.
