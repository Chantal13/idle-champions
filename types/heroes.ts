export interface Hero {
  id: number;
  name: string;
  game_instance_id?: number;
  graphic_id: number;
  portrait_graphic_id: number;
  character_sheet_details: {
    full_name: string;
    class: string;
    race: string;
    age: number;
    alignment: string;
    ability_scores: {
      str: number;
      dex: number;
      con: number;
      int: number;
      wis: number;
      cha: number;
    };
  };
  owned: boolean;
  seat_id: number;
  tags: string[];
}

export interface Seat {
  id: number;
  heroes: Hero[];
}
