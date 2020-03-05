export interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  healthpoints: number;
  mana: number;
  resistance: string;
  weakness: string;
  skills: object[];
  attributes: IAttribute[];
  // extend this to match query above
}

export interface IAttribute {
  name: string;
  value: number;
}
