import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
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
import {connect} from 'react-redux';
// import 'react-circular-progressbar/dist/styles.css';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q1: [
        {
          id: 1,
          i: 1,
          ans: 'What',
        },
        {
          id: 2,
          i: 1,
          ans: 'Why',
        },
        {
          id: 3,
          i: 1,
          ans: 'Then',
        },
        {
          id: 4,
          i: 1,
          ans: 'When',
        },
      ],
      q2: [
        {
          id: 1,
          i: 2,
          ans: 'My Name is Kiko.',
        },
        {
          id: 2,
          i: 2,
          ans: 'My name is Kiko.',
        },
        {
          id: 3,
          i: 2,
          ans: 'My Name Is Kiko.',
        },
        {
          id: 4,
          i: 2,
          ans: 'My Name is kiko.',
        },
      ],
      q3: [
        {
          id: 1,
          i: 3,
          ans: 'As',
        },
        {
          id: 2,
          i: 3,
          ans: 'So',
        },
        {
          id: 3,
          i: 3,
          ans: 'But',
        },
        {
          id: 4,
          i: 3,
          ans: 'Or',
        },
      ],
      q4: [
        {
          id: 1,
          i: 4,
          ans: 'He were sick.',
        },
        {
          id: 2,
          i: 4,
          ans: 'He are sick',
        },
        {
          id: 3,
          i: 4,
          ans: 'He am sick.',
        },
        {
          id: 4,
          i: 4,
          ans: 'He was sick.',
        },
      ],
      q5: [
        {
          id: 1,
          i: 5,
          ans: 'Bank - ball - bad - Bangkok',
        },
        {
          id: 2,
          i: 5,
          ans: 'Bangkok - bad - ball - bank',
        },
        {
          id: 3,
          i: 5,
          ans: 'Bad - ball - Bangkok - bank',
        },
        {
          id: 4,
          i: 5,
          ans: 'Ball - Bangkok - bad - ball',
        },
      ],

      selectedQuestion: [],
      right: 0,
      wrong: 0,
      currentPosition: 1,
      precentage: 0,
      test: 0,
      isVisible1: false,
    };
    // alert("1")
  }
  selectPackageHandler = data => {
    const {right, wrong, currentPosition, test, precentage} = this.state;
    setTimeout(() => {
      if (
        data.ans == 'What' ||
        data.ans == 'My name is Kiko.' ||
        data.ans == 'As' ||
        data.ans == 'Bad - ball - Bangkok - bank' ||
        data.ans == 'He was sick.'
      ) {
        if (currentPosition <= 5) {
          this.setState({
            test: test + 1,
            right: right + 1,
            currentPosition: currentPosition + 1,
            precentage: precentage + 20,
          });
        }
      } else {
        if (currentPosition <= 5) {
          this.setState({
            currentPosition: currentPosition + 1,
            wrong: wrong + 1,
            precentage: precentage + 20,
          });
        }
      }
      // alert(test)
      this.test();
    }, 500);
    this.setState({selectedQuestion: data});
    // const {right,wrong}=this.state
  };

  test = () => {
    const {right, wrong, currentPosition, precentage} = this.state;
    actions.quizData({right: right, wrong: wrong, precentage: precentage});
  };
  getAndCheckStyle = item => {
    const {selectedQuestion, right, wrong, currentPosition} = this.state;
    if (
      selectedQuestion &&
      selectedQuestion.id == item.id &&
      selectedQuestion.i == currentPosition
    ) {
      if (
        item.ans == 'What' ||
        item.ans == 'My name is Kiko.' ||
        item.ans == 'As' ||
        item.ans == 'Bad - ball - Bangkok - bank' ||
        item.ans == 'He was sick.'
      ) {
        return {
          backgroundColor: colors.white,
          borderColor: colors.themeColor,
        };
      } else {
        return {
          borderColor: colors.redFireBrick,
        };
      }
    } else {
      return {
        backgroundColor: 'transparent',
      };
    }
  };

  one = () => {
    return (
      <Text numberOfLines={2} style={styles.questionText}>
        Jono : ____________ is your name?Johny : My name is Johny.
      </Text>
    );
  };
  two = () => {
    return (
      <Text numberOfLines={2} style={styles.questionText}>
        The correct use of capital letters is in the sentence ___________ .
      </Text>
    );
  };
  three = () => {
    return (
      <Text numberOfLines={2} style={styles.questionText}>
        My teeth are ___ sharp as knife.
      </Text>
    );
  };
  four = () => {
    return (
      <Text numberOfLines={2} style={styles.questionText}>
        He is sick.The past tense of the sentence above is ____________.
      </Text>
    );
  };
  five = () => {
    return (
      <Text numberOfLines={2} style={styles.questionText}>
        The correct order of words on dictionary is _________.
      </Text>
    );
  };
  one1 = () => {
    const {q1, test} = this.state;
    // alert(isVisible)
    return q1.map((item, inx) => (
      <TouchableOpacity
        onPress={() => this.selectPackageHandler(item)}
        style={[styles.QOptionView, {...this.getAndCheckStyle(item)}]}>
        <Text>{item.ans}</Text>
      </TouchableOpacity>
    ));
  };
  two1 = () => {
    const {q2} = this.state;
    return q2.map((item, inx) => (
      <TouchableOpacity
        onPress={() => this.selectPackageHandler(item)}
        style={[styles.QOptionView, {...this.getAndCheckStyle(item)}]}>
        <Text>{item.ans}</Text>
      </TouchableOpacity>
    ));
  };
  three1 = () => {
    const {q3} = this.state;
    return q3.map((item, inx) => (
      <TouchableOpacity
        onPress={() => this.selectPackageHandler(item)}
        style={[styles.QOptionView, {...this.getAndCheckStyle(item)}]}>
        <Text>{item.ans}</Text>
      </TouchableOpacity>
    ));
  };
  four1 = () => {
    const {q4} = this.state;
    return q4.map((item, inx) => (
      <TouchableOpacity
        onPress={() => this.selectPackageHandler(item)}
        style={[styles.QOptionView, {...this.getAndCheckStyle(item)}]}>
        <Text>{item.ans}</Text>
      </TouchableOpacity>
    ));
  };
  five1 = () => {
    const {q5} = this.state;
    return q5.map((item, inx) => (
      <TouchableOpacity
        onPress={() => this.selectPackageHandler(item)}
        style={[styles.QOptionView, {...this.getAndCheckStyle(item)}]}>
        <Text>{item.ans}</Text>
      </TouchableOpacity>
    ));
  };
  // componentDidUpdate=()=>
  // {
  //   const {currentPosition, right, wrong, precentage} = this.state;

  //   actions.quizData({right})
  // }
  componentDidMount() {
    const {currentPosition, right, wrong, precentage} = this.state;
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        currentPosition: currentPosition,
        right: right,
        wrong: wrong,
        precentage: precentage,
      });
      actions.quizData({precentage: 0, right: 0, wrong: 0});
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  nextScreen = () => {
    // console.log(this.state.right,this.state.wrong)
    this.props.navigation.navigate(navigationStrings.ScoreScreen);
  };

  onBack = () => {
    this.props.navigation.navigate(navigationStrings.HomeScreen);
  };
  render() {
    const {quizData} = this.props;

    console.log(quizData.right, 'quizData');
    // this.test()
    const {right, q1, wrong, precentage, currentPosition} = this.state;
    const percentage = 66;
    return (
      <WrapperContainer>
        <ScrollView>
          <Header
            //  textData={}
            onBack={this.onBack}
            headerStyle={{height: 250, backgroundColor: colors.themeColor,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,}}
            isHomeScreen={true}
            rightIcon={imagePath.setting}
          />
          <View style={styles.questionParentsView}>
            {/* const percentage = 66; */}
            <View style={{alignItems: 'center'}}>
              <View style={styles.progressView}>
                <ProgressCircle
                  percent={precentage}
                  radius={50}
                  borderWidth={6}
                  color={colors.themeColor}
                  shadowColor="#fff"
                  bgColor="#fff">
                  <Text style={{fontSize: 18}}>
                    {quizData.precentage + '%'}
                  </Text>
                </ProgressCircle>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: moderateScaleVertical(15),
              }}>
              <View style={styles.Qcounter}>
                <Text style={{color: colors.CQuestion}}>{quizData.right}</Text>
                <View style={styles.leftGreenView}></View>
              </View>
              <View style={styles.Qcounter}>
              <View style={styles.rightWrongView}></View>
                <Text style={{color: colors.WQuestion}}>{quizData.wrong}</Text>
                
              </View>
            </View>
            <View style={styles.QTotalCounterView}>
              <Text
                style={
                  styles.QTotalCounterText
                }>{`Question ${currentPosition}/5`}</Text>
            </View>
            <View style={styles.questionView}>
              {(() => {
                switch (this.state.currentPosition) {
                  case 1:
                    return this.one();
                  case 2:
                    return this.two();
                  case 3:
                    return this.three();
                  case 4:
                    return this.four();
                  case 5:
                    return this.five();
                  default:
                    return this.props.navigation.navigate(
                      navigationStrings.ScoreScreen,
                    );
                }
              })()}
            </View>
          </View>
          <View style={{marginTop: 140}}>
            {(() => {
              switch (this.state.currentPosition) {
                case 1:
                  return this.one1();
                case 2:
                  return this.two1();
                case 3:
                  return this.three1();
                case 4:
                  return this.four1();
                case 5:
                  return this.five1();
                default:
                  return this.props.navigation.navigate(
                    navigationStrings.ScoreScreen,
                  );
              }
            })()}
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

export default connect(mapStateToProps)(HomeScreen);
const styles = StyleSheet.create({
  questionParentsView: {
    width: '90%',
    height: moderateScale(200),
    backgroundColor: colors.white,
    // borderWidth:1,
    position: 'absolute',
    borderRadius: moderateScale(20),
    top: moderateScale(130),
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
    top: -50,
    position: 'absolute',
    // marginHorizontal: moderateScaleVertical(130),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rightWrongView: {
    backgroundColor: colors.WQuestion,
    height: moderateScale(10),
    width: moderateScale(40),
    borderRadius: 20,
    marginHorizontal: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(3),
  },
  leftGreenView: {
    backgroundColor: colors.CQuestion,
    height: moderateScale(10),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(3),
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
