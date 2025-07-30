import { parseSeats } from '../../utils/getHeroes';
import type { Hero } from '../../types/heroes';

describe('parseSeats', () => {
  const baseHero: Omit<Hero, 'id' | 'name' | 'seat_id'> = {
    graphic_id: 0,
    portrait_graphic_id: 0,
    character_sheet_details: {
      full_name: '',
      class: '',
      race: '',
      age: 0,
      alignment: '',
      ability_scores: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    },
    owned: true,
    tags: [],
  };

  it('groups heroes with the same seat together', () => {
    const heroes: Hero[] = [
      { ...baseHero, id: 1, name: 'A', seat_id: 1 },
      { ...baseHero, id: 2, name: 'B', seat_id: 2 },
      { ...baseHero, id: 3, name: 'C', seat_id: 1 },
    ];

    const seats = parseSeats(heroes);

    expect(seats).toHaveLength(2);
    expect(seats[0].id).toBe(1);
    expect(seats[0].heroes).toEqual([heroes[0], heroes[2]]);
    expect(seats[1].id).toBe(2);
    expect(seats[1].heroes).toEqual([heroes[1]]);
  });
});
