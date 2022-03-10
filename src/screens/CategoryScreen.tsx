import {Ionicons} from "@expo/vector-icons";
import {useContext, useLayoutEffect, useState} from "react";
import {FlatList, Pressable, StyleSheet, View} from "react-native";
import {Product, RootStackScreenProps} from "../../types";
import {CustomTextInput, EmptyState} from "../components/atoms";
import {ProductCard} from "../components/molecules";
import Colors from "../constants/Colors";
import {MainContext} from "../context/mainContext";

export default function CategoryScreen({
  navigation,
  route,
}: RootStackScreenProps<"Category">) {
  const {category} = route?.params;
  const [searchText, setSearchText] = useState("");
  const context = useContext(MainContext);

  const selectedCategory = context.productByCategory[category];

  const filteredCategoryList = selectedCategory?.filter((item: Product) =>
    item?.title?.substring(0, searchText.length).includes(searchText)
  );

  const showEmptyState = filteredCategoryList.length === 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: category,
      headerLeft: () => (
        <Pressable onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-outline" size={24} color={Colors.white} />
        </Pressable>
      ),
    });
  }, [navigation]);

  const {container, productCardStyle, textInputView} = styles;

  const renderProduct = ({item}: {item: Product}) => {
    return (
      <ProductCard
        title={item.title}
        imageUrl={item.image}
        price={item.price}
        onPress={() =>
          navigation.navigate("ProductDetail", {productId: item.id})
        }
        style={productCardStyle}
      />
    );
  };

  const onChangeSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={container}>
      <View style={textInputView}>
        <CustomTextInput
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchText}
          backgroundColor={Colors.mainNight}
          placeholderTextColor={Colors.mainYellow}
          textColor={Colors.mainYellow}
        />
      </View>

      {showEmptyState ? (
        <EmptyState emptyStateText="We couldn't find any result" />
      ) : (
        <FlatList
          data={filteredCategoryList}
          numColumns={2}
          renderItem={renderProduct}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => String(index)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainGrey,
  },
  textInputView: {
    padding: 12,
  },
  productCardStyle: {
    flex: 1,
    margin: 12,
  },
});
