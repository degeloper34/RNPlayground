import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {RootStackScreenProps} from "../../types";

export default function ProductDetailScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flexView: {
    flex: 1,
  },
});
