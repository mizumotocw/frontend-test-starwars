import React from 'react';
import './CharacterCard.css';

export interface Character {
  name: string;
  image: string;
  planet: string;
  height: string;
  mass: string;
  gender: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const isMobile = window.innerWidth <= 767;

  return (
    <div className="character-card">
      <img 
        src={character.image} 
        alt={character.name}
        className="character-image"
      />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-planet">{character.planet}</p>
        {!isMobile && (
          <div className="character-details">
            <p>HEIGHT : {character.height}</p>
            <p>MASS : {character.mass}</p>
            <p>GENDER : {character.gender}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard; 