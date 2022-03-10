import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../types";
import Colors from "../../constants/Colors";
import CategoryScreen from "../../screens/CategoryScreen";
import ProductDetailScreen from "../../screens/ProductDetailScreen";
import BottomTabNavigator from "../BottomTabNavigator";
import GuestNavigator from "./GuestNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({memberToken}: {memberToken: string | null}) {
  return (
    <Stack.Navigator initialRouteName={!memberToken ? "Guest" : "Root"}>
      <Stack.Screen
        name="Guest"
        component={GuestNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
