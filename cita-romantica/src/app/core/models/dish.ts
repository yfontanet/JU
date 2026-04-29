export interface Dish {
  id: number;
  name: string;
  image: string;
  ingredients?: string[];
  selected: boolean;
  expanded?: boolean;
}