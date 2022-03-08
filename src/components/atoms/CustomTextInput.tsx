import {View, StyleSheet, TextInput, TextInputProps} from "react-native";

interface ITextInputProps extends TextInputProps {
  placeholder: string;
}

export function CustomTextInput({placeholder}: ITextInputProps) {
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
