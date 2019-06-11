
import { createStackNavigator, 
         createAppContainer } from 'react-navigation';
import LoginF from './containers/FirebaseLogin/Login';
import Main from './containers/Home';
import SignUp from './containers/FirebaseLogin/Signup';
import Loading from './utilities/Loading';

const Components = {
    Loading: {
        screen: Loading,
        navigationOptions: () => ({
            header: null,
        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
            header: null,
        })
    },
    LoginF: {
        screen: LoginF,
        navigationOptions: () => ({
            header: null,
        })
    },
    Main: {
        screen: Main,
        navigationOptions: () => ({
            header: null,
        })
    },
};

const AuthStackLogin = createStackNavigator(
    {
        ...Components,
    },
    {
        initialRouteName: 'Loading',
    }
);

const StackLogin = createAppContainer(AuthStackLogin);

export default StackLogin;

