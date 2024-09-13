import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';

//import {ICoffeeData} from '../interfaces/Icoffee';

import {COLORS} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';

// const getCategoriesFromData = (data: ICoffeeData[]) => {
//   const temp: Record<string, number> = {};
//   for (let i = 0; i < data.length; i++) {
//     const itemName = data[i].name;
//     if (temp[itemName] === undefined) {
//       temp[itemName] = 1;
//     } else {
//       temp[itemName]++;
//     }
//   }
//   const categories = Object.keys(temp);
//   categories.unshift('All');
//   return categories;
// };

// const getCoffeeList = (category: string, data: ICoffeeData[]) => {
//   if (category == 'All') {
//     return data;
//   } else {
//     const coffeeData = data.filter(
//       (item: ICoffeeData) => item.name === category,
//     );
//     return coffeeData;
//   }
// };

const HomeScreen = () => {
  //const CoffeList = useStore(state => state.CoffeeList);
  //const BeanList = useStore(state => state.BeanList);
  //const [categories] = useState(getCategoriesFromData(CoffeList));
  //const [searchText, setSearchText] = useState(undefined);
  // const [categoryIndex, setCategoryIndex] = useState({
  //   index: 0,
  //   category: categories[0],
  // });
  // const [sortedCoffee, setSortedCoffee] = useState(
  //   getCoffeeList(categoryIndex.category, CoffeList),
  // );

  //const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <HeaderBar title="Home Screen" />
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
});

export default HomeScreen;
