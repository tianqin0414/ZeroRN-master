import { createStackNavigator, } from 'react-navigation';

import InitialPage from './index';
import { StackNavigatorConfig, } from '../../config';
import Login from './login/LoginNavigation';
import Register from './register/RegisterNavigation';


const Routers = createStackNavigator(
  {
    Root: InitialPage,
	  Register: Register,
    Login: Login,

    // HeaderImageScrollView: pages.HeaderImageScrollView,
  },
  StackNavigatorConfig({
    initialRouteName: 'Root',
  }),
);

export default Routers;
