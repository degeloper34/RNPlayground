import {View, StyleSheet, TextInput} from "react-native";

export function CustomTextInput({placeholder}) {
  return (
    <View style={styles.textInputView}>
      <TextInput placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    padding: 6,
    borderRadius: 8,
  },
});
