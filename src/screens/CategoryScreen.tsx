import {Ionicons} from "@expo/vector-icons";
import {useLayoutEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import {RootStackScreenProps} from "../../types";
import {
  CustomText,
  CustomTextInput,
  EmptyState,
  FlexView,
} from "../components/atoms";
import Colors from "../constants/Colors";

export default function CategoryScreen({
  navigation,
  route,
}: RootStackScreenProps<"Category">) {
  const {category, categoryTitle} = route?.params;

  const [searchText, setSearchText] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: categoryTitle,
      headerLeft: () => (
        <Pressable onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-outline" size={24} color={Colors.white} />
        </Pressable>
      ),
    });
  }, [navigation]);

  const renderProduct = ({item}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("ProductDetail", {product: item})}
        style={{
          width: Dimensions.get("screen").width / 3,
          height: Dimensions.get("screen").height / 3.5,
          borderRadius: 8,
          backgroundColor: "white",
          overflow: "hidden",
          flex: 1,
          margin: 12,
        }}
      >
        <FlexView flex={3}>
          <Image
            source={{uri: item.image}}
            style={{flex: 1}}
            resizeMode={"contain"}
          />
        </FlexView>

        <View
          style={{
            flex: 1,
            padding: 3,
            backgroundColor: Colors.mainNight,
            marginTop: 12,
          }}
        >
          <FlexView flex={2}>
            <CustomText
              text={item.title}
              type={"medium"}
              textColor={Colors.mainGrey}
              fontSize={12}
              numberOfLines={2}
            />
          </FlexView>

          <FlexView>
            <CustomText
              text={"$" + item.price}
              type={"bold"}
              textColor={Colors.mainYellow}
              fontSize={12}
              numberOfLines={2}
            />
          </FlexView>
        </View>
      </Pressable>
    );
  };

  const onChangeSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredCategoryList = category?.filter((item) =>
    item?.title?.substring(0, searchText.length).includes(searchText)
  );

  const showEmptyState = filteredCategoryList.length === 0;

  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
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
});
