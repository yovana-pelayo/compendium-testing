import { useState } from 'react';
import QuoteList from '../components/QuoteList';
import Search from '../components/CharacterDropDown';
import CharacterDropDown from '../components/CharacterDropDown';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  //   const [selectedCharacters, setSelectedCharacters] = useState([]);
  return (
    <div>
      Home Page is up G
      <CharacterDropDown callback={setCharacters} />
      <QuoteList />
    </div>
  );
}
