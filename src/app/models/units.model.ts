export interface Unit {
  id: number;
  name: string;
  description: string;
  age: string;
  trained_at: string;
  cost: {
    wood?: number;
    food?: number;
    stone?: number;
    gold?: number;
  };
  train_time: number;
  movement_speed: number;
  line_of_sight: number;
  hit_points: number;
  range?: number;
  attack?: number;
  attack_speed?: number;
  armor: number;
  attack_bonus?: string[];
  armor_bonus?: string[];
  accuracy?: string;
  blast_radius?: number;
}

export interface GetAllUnits {
  units: Unit[];
}
