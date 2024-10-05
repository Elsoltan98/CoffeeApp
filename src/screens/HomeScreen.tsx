import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {ICoffeeData} from '../interfaces/Icoffee';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import {useStore} from './../store/store';
import GradientCard from '../components/GradientCard';

const getCategoriesFromData = (data: ICoffeeData[]) => {
  const temp: Record<string, number> = {};
  for (let i = 0; i < data.length; i++) {
    const itemName = data[i].name;
    if (temp[itemName] === undefined) {
      temp[itemName] = 1;
    } else {
      temp[itemName]++;
    }
  }
  const categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: ICoffeeData[]) => {
  if (category == 'All') {
    return data;
  } else {
    const coffeeData = data.filter(
      (item: ICoffeeData) => item.name === category,
    );
    return coffeeData;
  }
};

const HomeScreen = () => {
  const CoffeList = useStore(state => state.CoffeeList);
  //const BeanList = useStore(state => state.BeanList);
  const [categories] = useState(getCategoriesFromData(CoffeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeList),
  );

  //const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <HeaderBar title="Home Screen" />
        <Text style={styles.screenTitle}>
          Find the best{'\n'}coffee for you
        </Text>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            placeholderTextColor={COLORS.primaryLightGreyHex}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            style={styles.searchBar}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollView}>
          {categories.map((cate, index) => (
            <View style={styles.CategoryScrollContainer} key={index.toString()}>
              <TouchableOpacity
                onPress={() => {
                  setCategoryIndex({index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeList),
                  ]);
                }}
                style={styles.CategoryScrollItem}>
                <Text
                  style={[
                    styles.categoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {cate}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <FlatList
          data={sortedCoffee}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity>
              <GradientCard item={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  screenTitle: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_24,
    paddingLeft: SPACING.space_30,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
    marginHorizontal: SPACING.space_30,
    marginVertical: SPACING.space_28,
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_15,
    paddingHorizontal: SPACING.space_18,
    paddingVertical: SPACING.space_8,
  },
  searchBar: {
    color: COLORS.primaryWhiteHex,
    fontSize: SPACING.space_15,
    flex: 1,
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  CategoryScrollView: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollItem: {
    alignItems: 'center',
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
});

export default HomeScreen;
