export interface Structure {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: {
    Wood: number;
    Food: number;
    Stone: number;
    Gold: number;
  };
  build_time: number;
  relode_time: number;
  hit_points: number;
  line_of_sight: number;
  range: string;
  attack: number;
  armor: string;
  special: string[];
}

export interface GetAllStructures {
  structures: Structure[];
}
