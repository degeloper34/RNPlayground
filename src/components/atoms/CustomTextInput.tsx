import {View, StyleSheet, TextInput, TextInputProps} from "react-native";
import Colors from "../../constants/Colors";

interface ITextInputProps extends TextInputProps {
  placeholder: string;
  backgroundColor?: string;
  textColor?: string;
}

export function CustomTextInput({
  backgroundColor = Colors.mainGrey,
  textColor = Colors.mainNight,
  ...attrs
}: ITextInputProps) {
  return (
    <View style={[styles.textInputView, {backgroundColor: backgroundColor}]}>
      <TextInput {...attrs} style={{color: textColor}} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputView: {
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
