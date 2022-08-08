export interface Civilization {
  id: number;
  name: string;
  img: string;
  description: string;
  continent: string;
  army_focus: string[];
  unique_units: string[];
  unique_technologies: string[];
  civilization_bonuses: string[];
  team_bonus: string;
  wonder: string;
}

export interface GetAllCivilizations {
  civilizations: Civilization[];
}
