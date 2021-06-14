import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import colors from '../styles/colors';
const WrapperContainer = ({
  children,
  isLoading,
  isLoadingB,
  bgColor = colors.white,
  statusBarColor = colors.themeColor,
  barStyle = 'light-content',
  withModal = false,
  // source = defaultLoader,
  loadercolor = colors.themeColor,
}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: statusBarColor}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{backgroundColor: bgColor, flex: 1}}>{children}</View>
      {/* <Loader isLoading={isLoading} withModal={withModal} /> */}
    </SafeAreaView>
  );
};

export default WrapperContainer;
