export class Civilizations {
  constructor(
    public id: number,
    public expansion: string,
    public army_type: string,
    public unique_unit: string[],
    public unique_tech: string[],
    public team_bonus: string,
    public civilization_bonus: string[]
  ) {}
}
