import { useState } from 'react';
import QuoteList from '../components/QuoteList';
export default function Home() {
  const [character, setCharacter] = useState('');
  const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getQuotes();
  //     setQuotes(data);
  //   };
  //   fetchData();
  // }, []);
  // const filterQuotesByName = () => {
  //   return characters.filter(
  //     (character) => character.character === character || character === 'All'
  //   );
  // };

  return (
    <div className="home-page2">
      {/* Home Page is up G{filterQuotesByName().map((quotes) => (

        )} */}
      <QuoteList />
    </div>
  );
}
