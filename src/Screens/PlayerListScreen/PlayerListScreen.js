import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Component/Header';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
// import 'react-circular-progressbar/dist/styles.css';

class PlayerListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDataArray: [
        {
          profieId: 1,
          profileName: 'Salman',
          profilePic: imagePath.image1,
          pt: '250pt',
          number: '10',
        },
        {
          profieId: 3,
          profileName: 'Farman',
          profilePic: imagePath.image3,
          pt: '247pt',
          number: '09',
        },
        {
          profieId: 4,
          profileName: 'Mantash',
          profilePic: imagePath.image4,
          pt: '246pt',
          number: '08',
        },
        {
          profieId: 5,
          profileName: 'Girraj',
          profilePic: imagePath.image1,
          pt: '241pt',
          number: '07',
        },
        {
          profieId: 6,
          profileName: 'Ashif',
          profilePic: imagePath.image2,
          pt: '238pt',
          number: '06',
        },
        {
          profieId: 7,
          profileName: 'Nadeem',
          profilePic: imagePath.image3,
          pt: '235pt',
          number: '05',
        },
        {
          profieId: 8,
          profileName: 'Shakir',
          profilePic: imagePath.image4,
          pt: '230pt',
          number: '04',
        },
        {
          profieId: 9,
          profileName: 'Arshad',
          profilePic: imagePath.image2,
          pt: '225pt',
          number: '03',
        },
        {
          profieId: 10,
          profileName: 'Salman 1',
          profilePic: imagePath.image1,
          pt: '220pt',
          number: '02',
        },
        {
          profieId: 11,
          profileName: 'Salman 2',
          profilePic: imagePath.image3,
          pt: '210pt',
          number: '01',
        },
      ],
    };
  }

  onBack = () => {
    this.props.navigation.navigate(navigationStrings.ScoreScreen);
  };
  onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Please install this app and stay safe ',
        url: 'https://www.google.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    const {isActive, myDataArray} = this.state;
    const {quizData} = this.props;
    return (
      <WrapperContainer>
        <ScrollView>
          <Header
            //  textData={}
            onBack={this.onBack}
            headerStyle={{
              height: 450,
              backgroundColor: colors.themeColor,
            }}
            isHomeScreen={true}
            rightIcon={imagePath.image1}
            rightimageStyle={{width: 40, height: 40, borderRadius: 50}}
          />
          <View style={styles.topHeadingView}>
            <View style={styles.topheadingTextView}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 22,
                    fontWeight: 'bold',
                  }}>
                  Today
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.normalText}>Month</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.normalText}>All Time</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.5}}></View>
          </View>
          <View style={styles.topCardView}>
            <View style={styles.numTwoView}>
              <View style={{width:35,height:35,position:'absolute',backgroundColor:colors.white,borderRadius:50,top:-50,left:30}}>
                <Image source={imagePath.image3} style={styles.cardImage} />
              </View>
              <Text style={styles.numTwoText}>2</Text>
              <Text
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                5pt
              </Text>
            </View>
            <View style={styles.numOneView}>
            <View style={{width:35,height:35,position:'absolute',backgroundColor:colors.white,borderRadius:50,top:-50,left:30}}>
                <Image source={imagePath.image4} style={styles.cardImage} />
              </View>
              <Text style={styles.numOneText}>1</Text>
              <Text
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                455pt
              </Text>
            </View>
            <View style={styles.numThreeView}>
              <View style={{width:35,height:35,position:'absolute',backgroundColor:colors.white,borderRadius:50,top:-50,left:30}}>
                <Image source={imagePath.image2} style={styles.cardImage} />
              </View>
              <Text style={styles.numThreeText}>3</Text>
              <Text
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                375pt
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: -25,
              backgroundColor: colors.white,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            {myDataArray.map((data, index) => (
              <TouchableOpacity>
                <View style={{}}>
                  <View style={{position: 'relative'}}>
                    <View style={styles.ChatCard}>
                      <View style={styles.ChatCard}>
                        <View style={styles.profileImage}>
                          <Text
                            style={{
                              marginTop: 10,
                              fontWeight: 'bold',
                              color: colors.nameColor,
                            }}>
                            {data.number}
                          </Text>
                          <Image
                            source={data.profilePic}
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 50,
                              marginLeft: 20,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            marginLeft: 10,

                            flex: 0.7,
                          }}>
                          <View style={{marginTop: 15}}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: colors.nameColor,
                              }}>
                              {data.profileName}
                            </Text>
                          </View>
                        </View>
                        <View style={{marginRight: 'auto'}}>
                          <View
                            style={{
                              marginVertical: 15,
                              paddingHorizontal: moderateScaleVertical(7),
                              paddingVertical: moderateScaleVertical(2),
                              borderRadius: 20,
                              backgroundColor: colors.recordCircle,
                            }}>
                            <Text style={{color: colors.nameColor}}>
                              {data.pt}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </WrapperContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizData: state.main.quizData,
  };
};

export default connect(mapStateToProps)(PlayerListScreen);
const styles = StyleSheet.create({
  topHeadingView: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
  },
  profileImage: {
    marginLeft: 10,
    marginVertical: 10,
    flex: 0.25,

    flexDirection: 'row',
  },
  ChatCard: {
    flexDirection: 'row',
    flex: 1,
    // position:'absolute'
  },
  topheadingTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.9,
    paddingHorizontal: moderateScaleVertical(20),
  },
  normalText: {color: colors.white, fontSize: 16, marginTop: 5},
  topCardView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 250,
    marginHorizontal: moderateScaleVertical(55),
  },
  numTwoView: {
    height: 200,
    width: 100,
    backgroundColor: colors.recordCircle,
  },
  numTwoText: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    marginTop: moderateScaleVertical(30),
  },
  numOneView: {
    height: 250,
    width: 100,
    zIndex: 5000,
    backgroundColor: colors.recordCircle,
    marginTop: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  numOneText: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    marginTop: moderateScaleVertical(30),
  },
  numThreeView: {
    height: 150,
    width: 100,
    backgroundColor: colors.recordCircle,
    marginTop: 50,
  },
  numThreeText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    marginTop: moderateScaleVertical(20),
  },
  cardImage: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: 50,
    position: 'absolute',
    top: 1.6,
    left: 1.8,
  },
});
// const {q1}=this.state
// {!!q1 &&
//   q1.map((item, inx) => (
//     <TouchableOpacity
//       onPress={() => this.selectPackageHandler(item)}
//       style={[styles.QOptionView, {...this.getAndCheckStyle(item)}]}>
//       <Text>{item.ans}</Text>

//         <Image source={imagePath.greenTick} />

//     </TouchableOpacity>
//   ))}
