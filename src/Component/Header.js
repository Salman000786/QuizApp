import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
function Header({
  textData,
  onBack,
  themeColor,
  isHomeScreen,
  rightIcon,
  headerStyle,
  rightimageStyle
}) {
  return (
    <View style={{...styles.headerMainView,...headerStyle,}}>
      <View>
      <TouchableOpacity onPress={() => onBack()} style={{marginTop:moderateScaleVertical(20)}}>
        {!!isHomeScreen ? (
          <Image source={imagePath.backIcon} style={styles.backIcon} />
        ) : (
          <Image source={imagePath.menu} style={styles.backIcon} />
        )}
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress={() => console.log('working')} style={{marginTop:moderateScaleVertical(20),}}>
          <Image source={rightIcon} style={{...styles.rightIcon,...rightimageStyle}} />
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: colors.white,
    marginVertical: moderateScaleVertical(8),
    marginHorizontal: moderateScaleVertical(15),
  },
  rightIcon:
  {
    width: moderateScale(25),
    height: moderateScale(25),
    tintColor: colors.white,
    marginVertical: moderateScaleVertical(8),
    marginHorizontal: moderateScaleVertical(15),
  },
  textData: {
    marginVertical: 8,
    fontSize: 23,
    color: colors.whiteColor,
  },
  headerMainView: {
    justifyContent:'space-between',
    flexDirection: 'row',
    marginBottom: 2,
    height: moderateScale(300),
  },
});
const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};
export default Header;
