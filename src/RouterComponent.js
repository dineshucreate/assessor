
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/Signup';
import Loading from './components/Loading';

const Components = {
    Loading,
    SignUp,
    Login,
    Home,
};

const AuthStackLogin = createStackNavigator(
    {
        ...Components,
    },
    {
        initialRouteName: 'Loading',
        headerMode: 'none',
    }
);

const StackLogin = createAppContainer(AuthStackLogin);

export default StackLogin;

