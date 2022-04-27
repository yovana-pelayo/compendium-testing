import { useEffect } from 'react';
import { useShowContext } from '../context/ShowContext';
import getCharacters from '../services/characters';

export default function CharacterList() {
  const { characters, setCharacters, loading, setLoading } = useShowContext([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading();
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      Character list
      {characters.map((person) => (
        <div key={person.id}>{character.person}</div>
      ))}
    </div>
  );
}
