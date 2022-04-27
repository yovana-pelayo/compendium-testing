import { createContext, useContext, useState } from 'react';

const ShowContext = createContext();
const ShowProvider = ({ children }) => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState([]);
  return (
    <ShowContext.Provider
      value={{
        characters,
        setCharacters,
        loading,
        setLoading,
        species,
        setSpecies,
        planet,
        setPlanet,
        age,
        setAge,
        name,
        setName,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};
const useShowContext = () => {
  const context = useContext(ShowContext);
  if (context === undefined) {
    throw new Error('Show must be within a shProvider');
  }
  return context;
};
export { useShowContext, ShowProvider };

//created context so I can use state through my app
