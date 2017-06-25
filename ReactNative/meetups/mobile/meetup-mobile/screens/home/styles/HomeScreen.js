import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../constants/colors';
import {StyleSheet} from 'react-native';


const styles = EStyleSheet.create({
    root: {
        flex: 1,
        // height:300,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor',
    },
    topContainer: {
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: 'red',
      alignItems: 'center',
    },
    bottomContainer: {
      flex: 0.8,
      // backgroundColor: 'blue',
    }
});

export default styles;
