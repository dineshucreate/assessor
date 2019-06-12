import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import DevProfile from './screens/DevProfile';

const Components = {
  Welcome,
  SignUp,
  Login,
  Home,
  DevProfile,
};

const AppStack = createStackNavigator(Components,
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppStack);
