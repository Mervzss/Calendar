import { createStackNavigator } from 'react-navigation'

import FirstScreen from './ScreenOne'
import SecondScreen from './ScreenTwo'

export default StackMe = createStackNavigator(
    {
    First: FirstScreen,
    Second: SecondScreen
    },
    {
        initialRouteName:'First'
    }
)