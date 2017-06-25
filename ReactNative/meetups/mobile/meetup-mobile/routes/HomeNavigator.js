import { TabNavigator } from 'react-navigation';
import {
    HomeScreen,
    NotificationScreen,
    ProfileScreen
} from '../screens';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import color from '../constants/colors'
export default TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Notification: {
        screen: NotificationScreen
    },
    Profile: {
        screen: ProfileScreen
    },
}, {
        swipeEnbabled: true,
        tabBarPosition: 'bottom',
        scrollEnabled: true,
        animationEnabled: true,
        indicatorStyle: {
          backgroundColor: color.redColor
        },
        style: {
          backgroundColor: color.whiteColor,
        },
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: color.redColor,
        }
});
