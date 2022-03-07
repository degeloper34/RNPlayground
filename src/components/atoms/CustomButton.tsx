import {StyleSheet, Pressable} from "react-native";
import {CustomText} from "./CustomText";

export function CustomButton({onPress, text}) {
  return (
    <Pressable onPress={onPress} style={styles.btnStyle}>
      <CustomText
        type={"bold"}
        fontSize={14}
        text={text}
        textColor={"#21325E"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#F1D00A",
    padding: 12,
  },
});
