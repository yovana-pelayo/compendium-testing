import { useEffect } from 'react';
import getQuotes from '../services/quotes';
import { useState } from 'react';
import CharacterDropDown from './CharacterDropDown';
import './List.css';
export default function QuoteList() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [filteredQ, setFilteredQ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuotes();

      setQuotes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filterQuotesByName = (character) => {
    console.log(character);
    setFilteredQ(
      quotes.filter(
        (quote) => quote.character === character || character === 'All'
      )
    );
  };
  if (loading) return <div>Loading</div>;

  return (
    <>
      <div>
        <CharacterDropDown onChange={filterQuotesByName} />

        {(filteredQ.length ? filteredQ : quotes).map((quote) => (
          <ul key={quote.quote} style={{ color: 'white' }}>
            <li style={{ color: 'white' }}>
              {quote.character} - "{quote.quote}"
            </li>
            <img src={quote.image} height="80" />
          </ul>
        ))}
      </div>
    </>
  );
}
