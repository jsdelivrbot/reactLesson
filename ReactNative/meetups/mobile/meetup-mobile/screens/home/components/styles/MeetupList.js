import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../constants/colors';
import {StyleSheet} from 'react-native';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
    },
    titleContainer: {
      flex: 0.1,
      // paddingLeft: 5,
      paddingHorizontal: '2.5%',
      paddingVertical: '2.5%',
    },
    contentContainer: {
      flex: 1
    },
    title: {
      color: '$whiteColor',
       fontSize: 25
    },
    meetupCard: {
      height: 200,
      width: 175,
      padding: 2,
      // marginHorizontal: '1.5%',
      backgroundColor: '$redColor',
      marginLeft: 5,
    },
    meetupCardTopContainer: {
      flex: 1,
      position: 'relative',
      marginTop: 5,
    },
    meetupCardTitle: {
      position: 'absolute',
      color: '$whiteColor',
      top: '2%',
      left: '2.5%',
      fontSize: 16,
    },
    meetCardBottomContainer:{
      flex: 0.3,
      backgroundColor: '$whiteColor',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '2%',
    },
    meetupCardMetaName: {
      fontSize: 13,
    },
    meetupCardMetaDate: {
      fontSize: 12
    },
});

export default styles;
