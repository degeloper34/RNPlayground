/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from "@react-navigation/native";
import * as Linking from "expo-linking";
import {RootStackParamList} from "../../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Guest: {
        screens: {
          Login: "login",
        },
      },
      Root: {
        screens: {
          TabProductList: {
            initialRouteName: "ProductList",
            screens: {
              ProductList: "product-list",
              ProductDetail: "product/:productId",
              Category: "category/:category",
            },
          },
          TabCart: "tab-cart",
        },
      },
    },
  },
};

export default linking;
