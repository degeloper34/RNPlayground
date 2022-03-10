/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Guest: undefined;
  Login: undefined;
  ProductList: undefined;
  Cart: undefined;
  ProductDetail: {product: Product};
  Category: {
    categoryTitle: string;
    category: Category;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabProductList: undefined;
  TabCart: undefined;
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Product = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type Category = Product[];

export type ProductsWithCategorySignature = {
  [index: string]: Product[];
};

export interface IMainContext {
  appLoading: boolean;
  cart: object;
  amountByCategory: object;
  setAppLoading: (bool: boolean) => void;
  updateCart: (
    product: Product,
    quantity: number,
    operation: "add" | "remove"
  ) => void;
}
