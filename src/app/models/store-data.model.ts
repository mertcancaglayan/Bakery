export interface StoreData {
  data: Categories;
}

export interface Categories {
  desserts: Desserts;
  breads: Bread[];
  drinks: Drinks;
}

export interface Desserts {
  dessertCategories: DessertCategories;
}

export interface DessertCategories {
  cakes: Cake[];
  muffins: Muffin[];
  tarts: Tart[];
  classic: Classic[];
}

export interface Bread {
  name: string;
  type: string;
  description: string;
  ingredients: string[];
  recipe: string;
  image: string;
}

export interface Drinks {
  drinkTypes: DrinkTypes;
}

export interface DrinkTypes {
  hotBeverages: HotBeverage[];
  coldBeverages: ColdBeverage[];
}

export interface Item {
  name: string;
  type: string;
  description: string;
  ingredients: string[];
  recipe: string;
  image: string;
}

export interface Cake extends Item {}
export interface Muffin extends Item {}
export interface Tart extends Item {}
export interface Classic extends Item {}
export interface HotBeverage extends Item {}
export interface ColdBeverage extends Item {}
