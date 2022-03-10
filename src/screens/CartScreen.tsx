import {FontAwesome} from "@expo/vector-icons";
import {useContext} from "react";
import {FlatList, Image, Pressable, StyleSheet, View} from "react-native";
import {
  CustomButton,
  CustomText,
  EmptyState,
  FlexView,
} from "../components/atoms";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";

export default function CartScreen() {
  const context = useContext(MainContext);
  const showEmptyState =
    typeof context?.cart === "undefined"
      ? true
      : Object.keys(context?.cart).length === 0;

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

  const calculateSubTotal = () => {
    return Object.keys(context?.amountByCategory).reduce(
      (sum, key) => sum + parseFloat(context?.amountByCategory[key] || 0),
      0
    );
  };

  const calculateElectronicDiscount = () => {
    if (context?.amountByCategory["electronics"] > 750) {
      return context?.amountByCategory["electronics"] * 0.05;
    }

    return 0;
  };

  const calculateJeweleryDiscount = () => {
    if (context?.amountByCategory["jewelery"] > 1000) {
      return context?.amountByCategory["jewelery"] * 0.15;
    }

    return 0;
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const electronicDiscount = calculateElectronicDiscount();
    const jeweleryDiscount = calculateJeweleryDiscount();

    return subTotal - electronicDiscount - jeweleryDiscount;
  };

  return (
    <View style={styles.container}>
      {showEmptyState ? (
        <EmptyState emptyStateText={"There is no product in your cart."} />
      ) : (
        <>
          <FlatList
            data={Object.keys(context.cart)}
            renderItem={renderItem}
            style={styles.flatListStyle}
            keyExtractor={(_, index) => String(index)}
          />

          <View style={{padding: 12}}>
            <View style={styles.rowAlignedView}>
              <FlexView>
                <CustomText text={"Sub Total"} type={"medium"} fontSize={14} />
              </FlexView>
              <CustomText
                text={"$" + calculateSubTotal().toFixed(2)}
                type={"medium"}
                fontSize={14}
              />
            </View>

            {context?.amountByCategory["electronics"] > 750 && (
              <View style={styles.rowAlignedView}>
                <FlexView>
                  <CustomText
                    text={"Electronic discount"}
                    type={"medium"}
                    fontSize={14}
                  />
                </FlexView>
                <CustomText
                  text={"- $" + calculateElectronicDiscount().toFixed(2)}
                  type={"medium"}
                  fontSize={14}
                />
              </View>
            )}

            {context?.amountByCategory["jewelery"] > 1000 && (
              <View style={styles.rowAlignedView}>
                <FlexView>
                  <CustomText
                    text={"Jewelery discount"}
                    type={"medium"}
                    fontSize={14}
                  />
                </FlexView>
                <CustomText
                  text={"- $" + calculateJeweleryDiscount().toFixed(2)}
                  type={"medium"}
                  fontSize={14}
                />
              </View>
            )}

            <View style={styles.totalView}>
              <FlexView>
                <CustomText text={"Total"} type={"bold"} fontSize={14} />
              </FlexView>
              <CustomText
                text={"$" + calculateTotal().toFixed(2)}
                type={"bold"}
                fontSize={14}
              />
            </View>

            <CustomButton text="Buy" />
          </View>
        </>
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
  rowAlignedView: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalView: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
