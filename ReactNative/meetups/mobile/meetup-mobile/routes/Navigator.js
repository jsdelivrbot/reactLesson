import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import { CreateMeetupScreen } from '../screens/createMeetup';

export default StackNavigator({
  Home: {
    screen: HomeNavigator,
  },

  CreateMeetup: {
    screen: CreateMeetupScreen,
  },
}, {
  mode: 'modal'
});
