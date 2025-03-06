import { Planet, PlanetsResponse } from '../types/planet.types';

export const fetchPlanets = async (): Promise<Planet[]> => {
    try {
        const response = await fetch('https://swapi.dev/api/planets');
        if (!response.ok) {
            throw new Error('Failed to fetch planets');
        }
        const data: PlanetsResponse = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};