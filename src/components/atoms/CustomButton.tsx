import {StyleSheet, Pressable, PressableProps} from "react-native";
import Colors from "../../constants/Colors";
import {CustomText} from "./CustomText";

interface IProps extends PressableProps {
  onPress?: () => void;
  text: string;
}

export function CustomButton({onPress, text}: IProps) {
  return (
    <Pressable onPress={onPress} style={styles.btnStyle}>
      <CustomText
        type={"bold"}
        fontSize={14}
        text={text}
        textColor={Colors.mainNight}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: Colors.mainYellow,
    padding: 12,
  },
});
