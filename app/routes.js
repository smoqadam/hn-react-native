import {createStackNavigator} from 'react-navigation';
import HomeScreen from './containers/Home/HomeScreen';
import DetailsScreen from './containers/Details/DetailsScreen';
export default RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {screen: DetailsScreen}
}, {
    navigationOptions: { 
        header: null
    }
})
