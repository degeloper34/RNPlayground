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
  const product = route?.params?.product;
  const [quantity, setQuantity] = useState(1);
  const context = useContext(MainContext);

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
    context.updateCart(product, quantity, "add");
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

  return (
    <View style={styles.container}>
      <Pressable
        onPress={hideModal}
        style={{flex: 1, backgroundColor: "rgba(0,0,0,0.5)"}}
      />
      <View
        style={{
          flex: 3,
          backgroundColor: Colors.mainNight,
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 36,
        }}
      >
        <View style={{flex: 1, backgroundColor: "white", borderRadius: 8}}>
          <Image
            source={{uri: product.image}}
            style={{flex: 1}}
            resizeMode={"contain"}
          />
        </View>
        <View style={{flex: 2, marginTop: 24}}>
          <CustomText
            text={product.title}
            type={"bold"}
            textColor={Colors.mainYellow}
            fontSize={14}
            numberOfLines={2}
          />
          <View style={{marginTop: 12}} />
          <CustomText
            text={product.description}
            type={"medium"}
            textColor={Colors.mainGrey}
            fontSize={12}
            numberOfLines={8}
          />

          <View style={{marginTop: 12}} />

          <CustomText
            text={"$" + product.price}
            type={"bold"}
            textColor={Colors.mainYellow}
            fontSize={14}
          />

          <CustomText
            text={"Please select quantity"}
            type={"bold"}
            textColor={Colors.white}
            fontSize={14}
            style={{marginTop: 24, marginBottom: 12}}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable onPress={onPressMinusQuantity}>
              <AntDesign name="minuscircle" size={40} color={Colors.mainGrey} />
            </Pressable>

            <View
              style={{width: 40, marginHorizontal: 6, alignItems: "center"}}
            >
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

        <View style={{flexDirection: "row", alignItems: "center"}}>
          <FlexView>
            <CustomButton text={"Add to Cart"} onPress={onPressAddToCart} />
          </FlexView>

          <Pressable onPress={hideModal} style={{marginLeft: 12}}>
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
});
