import {
  Dimensions,
  Image,
  Pressable,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Colors from "../../constants/Colors";
import {CustomText, FlexView} from "../atoms";

interface IProps {
  title: string;
  imageUrl: string;
  price: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function ProductCard({title, imageUrl, price, onPress, style}: IProps) {
  const {imageStyle, innerViewStyle, btnStyle} = styles;

  return (
    <Pressable onPress={onPress} style={[btnStyle, style]}>
      <FlexView flex={3}>
        <Image
          source={{uri: imageUrl}}
          style={imageStyle}
          resizeMode={"contain"}
        />
      </FlexView>

      <View style={innerViewStyle}>
        <FlexView flex={2}>
          <CustomText
            text={title}
            type={"medium"}
            textColor={Colors.mainGrey}
            fontSize={12}
            numberOfLines={2}
          />
        </FlexView>

        <FlexView>
          <CustomText
            text={"$" + price}
            type={"bold"}
            textColor={Colors.mainYellow}
            fontSize={12}
            numberOfLines={2}
          />
        </FlexView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    width: Dimensions.get("screen").width / 3,
    height: Dimensions.get("screen").height / 3.5,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  imageStyle: {
    flex: 1,
  },
  innerViewStyle: {
    flex: 1,
    padding: 3,
    backgroundColor: Colors.mainNight,
    marginTop: 12,
  },
});
