// import { useEffect } from 'react';
// import { useShowContext } from '../context/ShowContext';
// import getCharacters from '../services/characters';

// export default function CharacterCard({
//   name,
//   species,
//   age,
//   planet,
//   loading,
//   setLoading,
// }) {
//   const { character, setCharacter } = useShowContext([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getCharacters();
//       setCharacter(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="character-card">
//       <h2>{name}</h2>
//       <p>Species: {species}</p>
//       <p>Age: {age}</p>
//       <p>Planet: {planet}</p>
//     </div>
//   );
// }
