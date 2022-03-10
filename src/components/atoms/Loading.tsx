import {ActivityIndicator, View, StyleSheet} from "react-native";

export function Loading({
  isLoadingActive,
}: {
  isLoadingActive: boolean | undefined;
}) {
  if (isLoadingActive) {
    return (
      <View style={styles.indicatorView}>
        <ActivityIndicator size="large" color="#F1D00A" />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  indicatorView: {
    position: "absolute",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
