import { CharacterResponse } from '../types/characters.types';

export async function fetchCharacters(page: number = 1): Promise<CharacterResponse> {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data: CharacterResponse = await response.json();
  return data;
}

// Optional: Helper function to get all characters (handles pagination)
export async function fetchAllCharacters(): Promise<CharacterResponse['results']> {
  const firstPage = await fetchCharacters(1);
  const totalPages = Math.ceil(firstPage.count / 10);
  
  const promises = Array.from({ length: totalPages - 1 }, (_, i) => 
    fetchCharacters(i + 2)
  );
  
  const remainingPages = await Promise.all(promises);
  const allCharacters = [
    ...firstPage.results,
    ...remainingPages.flatMap((page: CharacterResponse) => page.results)
  ];
  
  return allCharacters;
}
