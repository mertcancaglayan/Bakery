export interface StoreData {
  data: CategoryData[];
  loading: boolean;
  error: any;
}

export interface CategoryData {
  categories: Categories;
}

export interface Categories {
  desserts: Desserts;
  breads: Item[];
  drinks: Drinks;
}

export interface Desserts {
  dessertCategories: DessertCategories;
}

export interface DessertCategories {
  cakes: Item[];
  muffins: Item[];
  tarts: Item[];
  classic: Item[];
}

export interface Drinks {
  drinkTypes: DrinkTypes;
}

export interface DrinkTypes {
  hotBeverages: HotBeverage[];
  coldBeverages: ColdBeverage[];
}

export interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  ingredients: string[];
  recipe: string;
  image: string;
}

export interface Bread extends Item {}
export interface Cake extends Item {}
export interface Muffin extends Item {}
export interface Tart extends Item {}
export interface Classic extends Item {}
export interface HotBeverage extends Item {}
export interface ColdBeverage extends Item {}
