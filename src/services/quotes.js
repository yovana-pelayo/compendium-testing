export default async function getQuotes() {
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await resp.json();
  return data;
}
// export default async function getQuotesByCharacter() {
//   const resp = await fetch('https://futuramaapi.herokuapp.com/api/characters');
//   const data = await resp.json();
//   return data;
// }
