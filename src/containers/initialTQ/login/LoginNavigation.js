import { createStackNavigator, } from 'react-navigation';


import { BottomTabNavigatorConfig, StackNavigatorConfig, } from '../../../config';
import InitialPage from './index';
import Main from '../../../AppNavigationState';


const Routers = createStackNavigator(
  {
    Root: InitialPage,
    Main: Main,
    // HeaderImageScrollView: pages.HeaderImageScrollView,
  },
  StackNavigatorConfig({
    initialRouteName: 'Root',
  }),
);

export default Routers;
