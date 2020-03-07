export interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  healthpoints: number;
  mana: number;
  resistance: string;
  weakness: string;
  skills: ISkill[];
  attributes: IAttribute[];
  // extend this to match query above
}

export interface IAttribute {
  name: string;
  value: number;
}

export interface ISkill {
  name: string;
  damage: number;
  element: string;
}
