import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
} from 'react-native';
import Header from '../../Component/Header';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import {CircularProgressbar} from 'react-circular-progressbar';
import ProgressCircle from 'react-native-progress-circle';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import actions from '../../redux/actions';
import navigationStrings from '../../constants/navigationStrings';
import {block} from 'react-native-reanimated';
import { connect } from 'react-redux';
// import 'react-circular-progressbar/dist/styles.css';

 class ScoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestion: [],
      right: 0,
      wrong: 0,
      currentPosition: 1,
      precentage: 0,
      isNew: 'false',
    };
  }

  nextScreen = () => {
    this.props.navigation.navigate(navigationStrings.PlayerListScreen);
  };

  palyAgain=()=>
  {
    this.props.navigation.navigate(navigationStrings.HomeScreen)
  }

  onShare = async () => {
    try {
      const result = await Share.share({
       title: 'App link',
  message: 'Please install this app and stay safe ', 
  url: 'https://www.google.com'
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
  onBack=()=>
  {
    this.props.navigation.navigate(navigationStrings.HomeScreen)
  }
  render() {
    // const {right, q1, wrong, precentage, currentPosition} = this.state;
    const {quizData} = this.props;
    return (
      <WrapperContainer>
        <ScrollView>
          <Header
            //  textData={}
            onBack={this.onBack}
            headerStyle={{
              height: 380,
              backgroundColor: colors.themeColor,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            isHomeScreen={true}
            //   rightIcon={imagePath.setting}
          />
          <View
            style={styles.outerCircle}>
            <View
              style={styles.innerCircle}>
              <View
                style={styles.innerWhiteView}>
                <Text
                  style={styles.yourScoreText}>
                  Your Score
                </Text>
                <Text
                  style={styles.scoreNumber}>
                  150pt
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.questionParentsView}>
            {/* const percentage = 66; */}
            <View
              style={styles.qCounterView}>
              <View style={{...styles.Qcounter, flex: 0.5}}>
                <View
                  style={styles.themeColorDot}></View>
                <View style={{}}>
                  <Text
                    style={styles.precentageText}>
                    {quizData.precentage+"%"}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: moderateScaleVertical(10),
                      color: colors.textGrey,
                    }}>
                    {'Complation'}
                  </Text>
                </View>
              </View>
              <View style={{...styles.Qcounter, flex: 0.5}}>
                <View
                  style={styles.themeColorRightDot}></View>
                <View style={{}}>
                  <Text
                    style={styles.totalQText}>
                    {'5'}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: moderateScaleVertical(10),
                      color: colors.textGrey,
                    }}>
                    {'Tatal Ques'}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={styles.rightWrongView}>
              <View style={{...styles.Qcounter, flex: 0.5}}>
                <View
                  style={styles.greenDot}></View>
                <View style={{}}>
                  <Text
                    style={styles.rightNumber}>
                    {quizData.right}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: moderateScaleVertical(10),
                      color: colors.textGrey,
                    }}>
                    {'Correct'}
                  </Text>
                </View>
              </View>
              <View style={{...styles.Qcounter, flex: 0.5}}>
                <View
                  style={styles.redDot}></View>
                <View>
                  <Text
                    style={styles.wrongNumber}>
                    {quizData.wrong}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: moderateScaleVertical(10),
                      color: colors.textGrey,
                    }}>
                    {'Wrong'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: moderateScaleVertical(120),
            }}>
            <TouchableOpacity onPress={()=>this.palyAgain()} style={{alignItems: 'center'}}>
              <Image
                source={imagePath.play}
                style={styles.menuIcons}
              />
              <Text>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={imagePath.Review}
                style={styles.menuIcons}
              />
              <Text>Review Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onShare()} style={{alignItems: 'center'}}>
              <Image
                source={imagePath.share}
                style={styles.menuIcons}
              />
              <Text>Share Score</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: moderateScaleVertical(30),
            }}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={imagePath.pdf}
                style={styles.menuIcons}
              />
              <Text>Generate Pdf</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={imagePath.home}
                style={styles.menuIcons}
              />
              <Text>Go To Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={imagePath.leaderBoard}
                style={styles.menuIcons}
              />
              <Text>Leaderboard</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.nextScreen()}
          style={{position: 'absolute', bottom: 10, right: 20}}>
          <View>
            <Image
              source={imagePath.send}
              style={{width: 40, height: 40, tintColor: colors.themeColor}}
            />
          </View>
        </TouchableOpacity>
      </WrapperContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizData: state.main.quizData,
  };
};

export default connect(mapStateToProps)(ScoreScreen);
const styles = StyleSheet.create({
  questionParentsView: {
    width: '90%',
    height: moderateScale(160),
    backgroundColor: colors.white,
    // borderWidth:1,
    position: 'absolute',
    borderRadius: moderateScale(20),
    top: moderateScale(300),
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // alignItems: 'center',
  },
  progressView: {
    // marginTop:-50,
    top: -20,
    position: 'absolute',
    marginHorizontal: moderateScaleVertical(160),
  },
  Qcounter: {
    marginVertical: moderateScaleVertical(15),
    flexDirection: 'row',
  },
  QTotalCounterView: {
    alignItems: 'center',
    marginVertical: moderateScaleVertical(20),
  },
  QTotalCounterText: {
    fontSize: moderateScale(16),
    color: colors.themeColor,
  },
  questionView: {
    marginHorizontal: moderateScaleVertical(30),
    alignItems: 'center',
  },
  questionText: {
    textAlign: 'center',
    lineHeight: 35,
    fontWeight: 'bold',
    color: colors.blackOpacity86,
    fontSize: moderateScale(16),
  },
  QOptionView: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.blackOpacity10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScaleVertical(40),
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  outerCircle:
  {
    width: 210,
    height: 210,
    position: 'absolute',
    borderRadius: 105,
    backgroundColor: colors.recordCircle,
    left: moderateScale(100),
    top: moderateScale(70),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  innerCircle:
  {
    width: 150,
    height: 150,
    position: 'absolute',
    borderRadius: 75,
    backgroundColor: colors.recordCircle,
    // left:moderateScale(100),
    // borderWidth:1,
    top: moderateScale(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
    alignItems: 'center',
  },
  innerWhiteView:
  {
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
    backgroundColor: colors.white,
    top: moderateScale(14),
  },
  yourScoreText:
  {
    textAlign: 'center',
    marginTop: moderateScaleVertical(35),
    fontSize: moderateScale(12),
    color: colors.themeColor,
    fontWeight: 'bold',
  },
  scoreNumber:
  {
    textAlign: 'center',
    marginTop: moderateScaleVertical(8),
    fontSize: moderateScale(18),
    color: colors.themeColor,
    fontWeight: 'bold',
  },
  qCounterView:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScaleVertical(20),
    marginTop: 10,
  },
  themeColorDot:
  {
    width: 10,
    height: 10,
    backgroundColor: colors.themeColor,
    borderRadius: 50,
    marginTop: moderateScaleVertical(5),
  },
  themeColorRightDot:
  {
    width: 10,
    height: 10,
    backgroundColor: colors.themeColor,
    borderRadius: 50,
    marginLeft: moderateScaleVertical(60),
    marginTop: moderateScaleVertical(5),
  },precentageText:
  {
    marginHorizontal: moderateScaleVertical(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.themeColor,
  },
  totalQText:{
    marginHorizontal: moderateScaleVertical(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.themeColor,
  },greenDot:
  {
    width: 10,
    height: 10,
    backgroundColor: colors.CQuestion,
    borderRadius: 50,
    marginTop: moderateScaleVertical(5),
  },rightWrongView:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScaleVertical(20),
    marginTop: 10,
  },
  rightNumber:
  {
    marginHorizontal: moderateScaleVertical(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.CQuestion,
  },wrongNumber:
  {
    marginHorizontal: moderateScaleVertical(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.WQuestion,
  },redDot:
  {
    width: 10,
    height: 10,
    backgroundColor: colors.WQuestion,
    borderRadius: 50,
    marginLeft: moderateScaleVertical(60),
    marginTop: moderateScaleVertical(5),
  },menuIcons:
  {width:moderateScale(60), height: moderateScale(60), borderRadius: moderateScale(50)}
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
