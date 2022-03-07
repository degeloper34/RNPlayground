import {useLayoutEffect} from "react";
import {Image, StyleSheet, View} from "react-native";
import {RootStackScreenProps} from "../../types";
import {CustomButton, CustomText} from "../components/atoms";
import Colors from "../constants/Colors";

export default function ProductDetailScreen({
  navigation,
  route,
}: RootStackScreenProps<"ProductDetail">) {
  console.log("route", route);
  const product = route?.params?.product;
  console.log("product", product);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.title,
    });
  }, [navigation]);

  const onPressAddToCart = () => {};
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: "white", borderRadius: 8}}>
        <Image
          source={{uri: product.image}}
          style={{flex: 1}}
          resizeMode={"contain"}
        />
      </View>
      <View style={{flex: 1, marginTop: 24}}>
        <CustomText
          text={product.title}
          type={"bold"}
          textColor={Colors.mainYellow}
          fontSize={14}
          numberOfLines={2}
        />
        <View style={{marginTop: 24}} />
        <CustomText
          text={product.description}
          type={"medium"}
          textColor={Colors.mainGrey}
          fontSize={12}
        />

        <View style={{marginTop: 24}} />

        <CustomText
          text={"$" + product.price}
          type={"bold"}
          textColor={Colors.mainYellow}
          fontSize={14}
        />
      </View>

      <CustomButton text={"Add to Cart"} onPress={onPressAddToCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: Colors.mainNight,
  },
});
