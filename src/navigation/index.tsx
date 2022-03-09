import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import {ColorSchemeName} from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigator from "./StackNavigators/RootNavigator";

export default function Navigation({
  colorScheme,
  memberToken,
}: {
  colorScheme: ColorSchemeName;
  memberToken: string | null;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator memberToken={memberToken} />
    </NavigationContainer>
  );
}
