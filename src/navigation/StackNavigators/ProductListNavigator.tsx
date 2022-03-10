import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {RootStackParamList} from "../../../types";
import Colors from "../../constants/Colors";
import CategoryScreen from "../../screens/CategoryScreen";
import ProductDetailScreen from "../../screens/ProductDetailScreen";
import ProductListScreen from "../../screens/ProductListScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Screen = Stack.Screen;

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.mainNight,
        },
        headerTitleStyle: {
          color: Colors.mainYellow,
        },
        headerTitleAlign: 'center'
      }}
      initialRouteName={"ProductList"}
    >
      <Screen
        name={"ProductList"}
        component={ProductListScreen}
        options={{headerTitle: "Products"}}
      />

      <Stack.Screen name="Category" component={CategoryScreen} />

      <Stack.Group
        screenOptions={{presentation: "transparentModal", headerShown: false}}
      >
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
