export interface Technology {
  id: number;
  name: string;
  description: string;
  age: string;
  researched_at: string;
  cost: {
    wood?: number;
    food?: number;
    stone?: number;
    gold?: number;
  };
  research_time: number;
  applies_to: string[];
}

export interface GetAllTechnologies {
  technologies: Technology[];
}
