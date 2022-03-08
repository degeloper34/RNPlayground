import {FontAwesome} from "@expo/vector-icons";
import {useContext} from "react";
import {FlatList, Image, StyleSheet, View} from "react-native";
import {RootStackScreenProps} from "../../types";
import {CustomText} from "../components/atoms";
import {MainContext} from "../context/mainContext";

export default function CartScreen({navigation}: RootStackScreenProps<"Cart">) {
  const context = useContext(MainContext);

  console.log("screen", context.cart);

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image
          source={{uri: context.cart[item].image}}
          style={{width: 50, height: 50}}
          resizeMode={"contain"}
        />
        <View style={{paddingHorizontal: 12, flex: 1}}>
          <CustomText
            text={context.cart[item].title}
            type={"medium"}
            numberOfLines={2}
          />
          <CustomText
            text={"Quantity: " + context.cart[item].quantity}
            type={"medium"}
          />
        </View>

        <FontAwesome name="remove" size={24} color="black" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={Object.keys(context.cart)} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
