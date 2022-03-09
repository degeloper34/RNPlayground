import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigator from "./StackNavigators/RootNavigator";

export default function Navigation({
  memberToken,
}: {
  memberToken: string | null;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator memberToken={memberToken} />
    </NavigationContainer>
  );
}
