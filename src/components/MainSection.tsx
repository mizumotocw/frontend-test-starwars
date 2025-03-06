import React, { useState, useEffect } from 'react';
import CharacterCard, { Character } from './CharacterCard';
import { fetchCharacters } from '../services/fetchCharacters';
import { fetchPlanets } from '../services/fetchPlanets';
import './MainSection.css';

interface MainSectionProps {
  filter: string;
  sortCategory: 'characters' | 'planets' | null;
}

const MainSection: React.FC<MainSectionProps> = ({ filter, sortCategory }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 8;  // New constant for items per page

  const sortCharacters = (chars: Character[]) => {
    if (!sortCategory) return chars;
    
    return [...chars].sort((a, b) => {
      if (sortCategory === 'characters') {
        return a.name.localeCompare(b.name);
      } else {
        return a.planet.localeCompare(b.planet);
      }
    });
  };

  const filteredAndSortedCharacters = sortCharacters(
    characters.filter(character => 
      character.name.toLowerCase().includes(filter.toLowerCase()) ||
      character.planet.toLowerCase().includes(filter.toLowerCase())
    )
  );

  const loadCharacters = async (page: number) => {
    try {
      setLoading(true);
      // Fetch both characters and planets
      const [charactersData, planets] = await Promise.all([
        fetchCharacters(page),
        fetchPlanets()
      ]);

      // Create a map of planet URLs to planet names for easier lookup
      const planetMap = new Map(planets.map(planet => [planet.url, planet.name]));

      // Get all characters and slice them to show only ITEMS_PER_PAGE at a time
      const formattedCharacters: Character[] = charactersData.results
        .map(char => ({
          name: char.name,
          image: `https://picsum.photos/432/230?random=${Math.random()}`, // Random image for each character
          planet: planetMap.get(char.homeworld) || 'Unknown',
          height: char.height,
          mass: char.mass,
          gender: char.gender
        }))
        .slice(0, ITEMS_PER_PAGE);

      if (page === 1) {
        setCharacters(formattedCharacters);
      } else {
        setCharacters(prev => [...prev, ...formattedCharacters]);
      }

      // Check if there are more pages and if we've shown all characters from the current page
      setHasMore(!!charactersData.next && formattedCharacters.length === ITEMS_PER_PAGE);
      setLoading(false);
    } catch (error) {
      console.error('Error loading characters:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(1);
  }, []);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setCurrentPage(prev => prev + 1);
      loadCharacters(currentPage + 1);
    }
  };

  return (
    <section className="main-section">
      <h2>All Characters</h2>
      <div className="characters-grid">
        {filteredAndSortedCharacters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
      {hasMore && !loading && (
        <div className="load-more-container">
          <button 
            onClick={handleLoadMore}
            className="load-more-button"
          >
            Load More
          </button>
        </div>
      )}
      {loading && (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      )}
    </section>
  );
};

export default MainSection; 