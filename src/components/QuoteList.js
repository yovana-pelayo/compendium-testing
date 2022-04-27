import { useEffect } from 'react';
import getQuotes from '../services/quotes';
import { useState } from 'react';

export default function QuoteList() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuotes();
      console.log(data);

      setQuotes(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      Quote list
      {quotes.map((quote) => (
        <div key={quote.quote}>
          <p>
            {quote.character} - "{quote.quote}"
          </p>
          <img src={quote.image} />
        </div>
      ))}
    </div>
  );
}
