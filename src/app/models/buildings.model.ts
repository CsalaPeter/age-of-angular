export interface Building {
  id: number;
  name: string;
  description: string;
  type: string[];
  age: string;
  cost: {
    Wood?: number;
    Food?: number;
    Stone?: number;
    Gold?: number;
  };
  build_time: number;
  hit_points: number[];
  line_of_sight: number;
  armor: number[];
  range?: number;
  rate_of_fire?: number;
  attack?: number;
  special?: string[];
}

export interface GetAllBuildings {
  structures: Building[];
}
