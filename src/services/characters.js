export default async function getCharacters() {
  const resp = await fetch(
    'https://futuramaapi.herokuapp.com/api/v2/characters'
  );
  const data = await resp.json();
  console.log(data);
  return data;
}
