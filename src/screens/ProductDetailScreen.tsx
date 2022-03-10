import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useContext, useLayoutEffect, useState} from "react";
import {Image, Pressable, StyleSheet, View} from "react-native";
import {RootStackScreenProps} from "../../types";
import {CustomButton, CustomText, FlexView} from "../components/atoms";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";

export default function ProductDetailScreen({
  navigation,
  route,
}: RootStackScreenProps<"ProductDetail">) {
  const productId = route?.params?.productId;
  const [quantity, setQuantity] = useState(1);
  const context = useContext(MainContext);

  const selectedProduct = context.productList[productId - 1];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-outline" size={24} color={Colors.white} />
        </Pressable>
      ),
    });
  }, [navigation]);

  const onPressAddToCart = () => {
    context.updateCart(selectedProduct, quantity, "add");
    navigation.pop();
  };

  const hideModal = () => {
    navigation.pop();
  };

  const onPressMinusQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPressPlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const {
    container,
    transparentView,
    innerContainer,
    imageStyle,
    imageView,
    innerView,
    marginTopView,
    rowAlignedView,
    txtSelectQuantity,
    quantityView,
    btnCancel,
  } = styles;

  return (
    <View style={container}>
      <Pressable onPress={hideModal} style={transparentView} />
      <View style={innerContainer}>
        <View style={imageView}>
          <Image
            source={{uri: selectedProduct?.image}}
            style={imageStyle}
            resizeMode={"contain"}
          />
        </View>
        <View style={innerView}>
          <CustomText
            text={selectedProduct?.title}
            type={"bold"}
            textColor={Colors.mainYellow}
            fontSize={14}
            numberOfLines={2}
          />

          <View style={marginTopView} />

          <CustomText
            text={selectedProduct?.description}
            type={"medium"}
            textColor={Colors.mainGrey}
            fontSize={12}
            numberOfLines={8}
          />

          <View style={marginTopView} />

          <CustomText
            text={"$" + selectedProduct?.price}
            type={"bold"}
            textColor={Colors.mainYellow}
            fontSize={14}
          />

          <CustomText
            text={"Please select quantity"}
            type={"bold"}
            textColor={Colors.white}
            fontSize={14}
            style={txtSelectQuantity}
          />

          <View style={rowAlignedView}>
            <Pressable onPress={onPressMinusQuantity}>
              <AntDesign name="minuscircle" size={40} color={Colors.mainGrey} />
            </Pressable>

            <View style={quantityView}>
              <CustomText
                text={quantity}
                fontSize={18}
                type={"medium"}
                textColor={Colors.mainYellow}
              />
            </View>

            <Pressable onPress={onPressPlusQuantity}>
              <AntDesign name="pluscircle" size={40} color={Colors.mainGrey} />
            </Pressable>
          </View>
        </View>

        <View style={rowAlignedView}>
          <FlexView>
            <CustomButton text={"Add to Cart"} onPress={onPressAddToCart} />
          </FlexView>

          <Pressable onPress={hideModal} style={btnCancel}>
            <MaterialIcons name="cancel" size={50} color={Colors.mainGrey} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  rowAlignedView: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnCancel: {
    marginLeft: 12,
  },
  quantityView: {
    width: 40,
    marginHorizontal: 6,
    alignItems: "center",
  },
  txtSelectQuantity: {
    marginTop: 24,
    marginBottom: 12,
  },
  innerContainer: {
    flex: 3,
    backgroundColor: Colors.mainNight,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
  },
  imageStyle: {
    flex: 1,
  },
  imageView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
  },
  transparentView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  marginTopView: {
    marginTop: 12,
  },
  innerView: {
    flex: 2,
    marginTop: 24,
  },
});
