import {FontAwesome} from "@expo/vector-icons";
import {useContext} from "react";
import {FlatList, Image, Pressable, StyleSheet, View} from "react-native";
import {RootStackScreenProps} from "../../types";
import {CustomText, EmptyState} from "../components/atoms";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";

export default function CartScreen({navigation}: RootStackScreenProps<"Cart">) {
  const context = useContext(MainContext);
  const showEmptyState = Object.keys(context.cart).length === 0;

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.renderItemView}>
        <Image
          source={{uri: context.cart[item].image}}
          style={styles.imageStyle}
          resizeMode={"contain"}
        />
        <View style={styles.renderItemInnerView}>
          <CustomText
            text={context.cart[item].title}
            type={"medium"}
            numberOfLines={1}
          />
          <View style={styles.marginTop} />
          <CustomText
            text={"Unit Price: $" + context.cart[item].price}
            type={"medium"}
          />
          <View style={styles.marginTop} />
          <CustomText
            text={"Quantity: " + context.cart[item].quantity}
            type={"medium"}
          />
          <View style={styles.marginTop} />
          <CustomText
            text={
              "Total Price: $" +
              context.cart[item].quantity * context.cart[item].price
            }
            type={"medium"}
          />
        </View>
        <Pressable
          onPress={() =>
            context.updateCart(
              context.cart[item],
              context.cart[item].quantity,
              "remove"
            )
          }
        >
          <FontAwesome name="remove" size={24} color="black" />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showEmptyState ? (
        <EmptyState emptyStateText={"There is no product in your cart."} />
      ) : (
        <FlatList
          data={Object.keys(context.cart)}
          renderItem={renderItem}
          style={styles.flatListStyle}
          keyExtractor={(_, index) => String(index)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  renderItemView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.mainGrey,
    padding: 6,
    borderRadius: 8,
    marginBottom: 12,
  },
  imageStyle: {
    width: 70,
    height: 70,
  },
  renderItemInnerView: {
    paddingHorizontal: 12,
    flex: 1,
  },
  marginTop: {
    marginTop: 6,
  },
  flatListStyle: {
    padding: 12,
  },
});
