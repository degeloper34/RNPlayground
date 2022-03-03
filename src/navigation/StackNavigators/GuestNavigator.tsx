import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {RootStackParamList} from "../../../types";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Screen = Stack.Screen;

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Screen name={"Login"} component={LoginScreen} />
    </Stack.Navigator>
  );
};
