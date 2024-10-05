import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {ICoffeeData} from '../interfaces/Icoffee';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS} from '../theme/theme';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface IProps {
  item: ICoffeeData;
}

const GradientCard: FC<IProps> = ({item}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={item.imagelink_square}
        style={styles.CardBg}></ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardBg: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
  },
});

export default GradientCard;
