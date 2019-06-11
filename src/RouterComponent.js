
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';

const Components = {
  Welcome,
  SignUp,
  Login,
  Home,
};

const AppStack = createStackNavigator(Components,
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
);

export default createAppContainer(AppStack);
