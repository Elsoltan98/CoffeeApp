import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface IProps {
  title?: string;
}

const HeaderBar: FC<IProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={SPACING.space_16}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
