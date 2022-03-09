import {MaterialCommunityIcons} from "@expo/vector-icons";
import {View, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import {CustomText} from "./CustomText";

export function EmptyState({emptyStateText}: {emptyStateText: string}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="alert-octagram"
        size={100}
        color={Colors.mainYellow}
      />
      <CustomText
        text={emptyStateText}
        type={"medium"}
        textColor={Colors.mainNight}
        fontSize={14}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
